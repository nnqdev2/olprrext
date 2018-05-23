import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { State } from './models/state';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class StatesResolver implements Resolve<Observable<State[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<State[]> {
    return this.incidentDataService.getStates();
  }
}
