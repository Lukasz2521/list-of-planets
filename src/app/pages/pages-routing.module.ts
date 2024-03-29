import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./list-of-planets/list-of-planets.module')
            .then(mod => mod.ListOfPlanetsModule)
      },
      {
        path: 'details', loadChildren: () =>
          import('./planet-details/planet-details.module')
            .then(mod => mod.PlanetDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
