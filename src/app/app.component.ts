import { PlanetsService } from './@core/services/planets.service';
import { Planet } from './@core/data/planet';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'rotation_period'];
  dataSource = new MatTableDataSource([]);
  planetsLength = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private planetSerivce: PlanetsService) {}

  ngOnInit() {
    this.planetSerivce.get().subscribe((data) => {
      this.dataSource.data = data.results;
      this.planetsLength = data.count;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
