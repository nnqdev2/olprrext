import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ReleaseCauseType } from './models/release-cause-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class ReleaseCauseTypesResolver implements Resolve<Observable<ReleaseCauseType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReleaseCauseType[]> {
    return this.incidentDataService.getReleaseCauseTypes();
  }
}
