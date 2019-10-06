import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfPlanetsComponent } from './list-of-planets.component';
import { ListOfPlanetsRoutingModule } from './list-of-planets-routing.module';

@NgModule({
  declarations: [ListOfPlanetsComponent],
  imports: [
    CommonModule,
    ListOfPlanetsRoutingModule
  ],
  exports: [
    ListOfPlanetsRoutingModule
  ],
})
export class ListOfPlanetsModule { }
