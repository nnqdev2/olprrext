import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DiscoveryType } from './models/discovery-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class DiscoveryTypesResolver implements Resolve<Observable<DiscoveryType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscoveryType[]> {
    return this.incidentDataService.getDiscoveryTypes();
  }
}
