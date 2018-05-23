import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Quadrant } from './models/quadrant';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class QuadrantsResolver implements Resolve<Observable<Quadrant[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Quadrant[]> {
    return this.incidentDataService.getQuadrants();
  }
}
