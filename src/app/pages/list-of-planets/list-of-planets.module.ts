import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPlanetsComponent } from './list-of-planets.component';
import { ListOfPlanetsRoutingModule } from './list-of-planets-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ListOfPlanetsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ListOfPlanetsRoutingModule
  ],
  exports: [
    ListOfPlanetsRoutingModule
  ],
})
export class ListOfPlanetsModule { }
