import { Planet } from './../../@core/data/planet';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { PlanetsService } from 'src/app/@core/services/planets.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planet: Planet;
  state$: Observable<object>;

  constructor(private planetsService: PlanetsService,
    private router: Router) { }

  ngOnInit() {
    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    )

    this.state$.subscribe((value) => {
      this.planet = value as Planet;
    })
  }
}
