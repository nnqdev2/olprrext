import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmationType } from './models/confirmation-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class ConfirmationTypesResolver implements Resolve<Observable<ConfirmationType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ConfirmationType[]> {
    return this.incidentDataService.getConfirmationTypes();
  }
}