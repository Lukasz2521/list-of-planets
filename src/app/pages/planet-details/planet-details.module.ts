import { PlanetDetailsRoutingModule } from './planet-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetailsComponent } from './planet-details.component';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlanetDetailsComponent],
  imports: [
    CommonModule,
    PlanetDetailsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    PlanetDetailsRoutingModule
  ]
})
export class PlanetDetailsModule { }
