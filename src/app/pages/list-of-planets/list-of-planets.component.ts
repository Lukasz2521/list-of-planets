import { PlanetsService } from '../../@core/services/planets.service';
import { Planet } from '../../@core/data/planet';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Api } from 'src/app/@core/data/api';

@Component({
  selector: 'app-list-of-planets',
  templateUrl: './list-of-planets.component.html',
  styleUrls: ['./list-of-planets.component.scss']
})
export class ListOfPlanetsComponent implements OnInit {
  initView = true;
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource([]);
  planetsLength = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private planetSerivce: PlanetsService) {}

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Planet, filter: string) => {
      return data.name.toLowerCase().indexOf(filter) != -1;
    };

    this.planetSerivce.get().subscribe((data: Api) => {
      this.dataSource.data.push(...data.results);
      this.dataSource._updateChangeSubscription();
      if (this.initView) {
        this.dataSource.paginator = this.paginator;
        this.initView = false;
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
