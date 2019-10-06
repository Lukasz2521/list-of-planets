import { PlanetDetailsRoutingModule } from './planet-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetailsComponent } from './planet-details.component';


@NgModule({
  declarations: [PlanetDetailsComponent],
  imports: [
    CommonModule,
    PlanetDetailsRoutingModule
  ],
  exports: [
    PlanetDetailsRoutingModule
  ]
})
export class PlanetDetailsModule { }
