import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { County } from './models/county';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class CountiesResolver implements Resolve<Observable<County[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<County[]> {
    return this.incidentDataService.getCounties();
  }
}
