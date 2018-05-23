import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SiteType } from './models/site-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class SiteTypesResolver implements Resolve<Observable<SiteType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SiteType[]> {
    return this.incidentDataService.getSiteTypes();
  }
}
