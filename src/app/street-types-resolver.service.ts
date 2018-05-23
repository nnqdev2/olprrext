import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { StreetType } from './models/street-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class StreetTypesResolver implements Resolve<Observable<StreetType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StreetType[]> {
    return this.incidentDataService.getStreetTypes();
  }
}
