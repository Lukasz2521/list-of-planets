import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./pages/list-of-planets/list-of-planets.module')
        .then(mod => mod.ListOfPlanetsModule)
  },
  {
    path: ':id', loadChildren: () =>
      import('./pages/planet-details/planet-details.module')
        .then(mod => mod.PlanetDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
