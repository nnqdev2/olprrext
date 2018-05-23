import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SourceType } from './models/source-type';
import { IncidentDataService } from './incident/incident-data.service';

@Injectable()
export class SourceTypesResolver implements Resolve<Observable<SourceType[]>> {
  constructor(private incidentDataService: IncidentDataService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SourceType[]> {
    return this.incidentDataService.getSourceTypes();
  }
}
