import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
// import { catchError, tap, retry} from 'rxjs/operators';

import { Incident } from '../models/incident';
import { ConfirmationType } from '../models/confirmation-type';
import { County } from '../models/county';
import { DiscoveryType } from '../models/discovery-type';
import { Quadrant } from '../models/quadrant';
import { ReleaseCauseType } from '../models/release-cause-type';
import { SiteType } from '../models/site-type';
import { SourceType } from '../models/source-type';
import { State } from '../models/state';
import { StreetType } from '../models/street-type';
import { LogPublisherConfig } from '../shared/log-publishers';

@Injectable()
export class IncidentDataService {

  private loggers: LogPublisherConfig[] = [];

  // constructor(@Inject(forwardRef(() => LogService)) private logService: LogService) { }
  constructor(private http: HttpClient) {
  }


  getConfirmationTypes(): Observable<ConfirmationType[]> {
    return this.http.get<ConfirmationType[]>(environment.olprrapi_confirmationtype);
  }

  getCounties(): Observable<County[]> {
    return this.http.get<County[]>(environment.olprrapi_county);
  }
  getDiscoveryTypes(): Observable<DiscoveryType[]> {
    return this.http.get<DiscoveryType[]>(environment.olprrapi_discoverytype);
  }

  getQuadrants(): Observable<Quadrant[]> {
    return this.http.get<Quadrant[]>(environment.olprrapi_quadrant);
  }

  getReleaseCauseTypes(): Observable<ReleaseCauseType[]> {
    return this.http.get<ReleaseCauseType[]>(environment.olprrapi_releasecausetype);
  }

  getSiteTypes(): Observable<SiteType[]> {
    return this.http.get<SiteType[]>(environment.olprrapi_sitetype);
  }

  getSourceTypes(): Observable<SourceType[]> {
    return this.http.get<SourceType[]>(environment.olprrapi_sourcetype);
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(environment.olprrapi_state);
  }

  getStreetTypes(): Observable<StreetType[]> {
    return this.http.get<StreetType[]>(environment.olprrapi_streettype);
  }

  createIncident(incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(environment.olprrapi_incident, incident);
  }

  // Uses http.get() to load data from a single API endpoint
  // getSiteTypes(): Observable<SiteType[]> {
  //   return this.http.get<SiteType[]>(this._siteTypeUrl, httpOptions)
  //       .do(data => console.log('All: ' + JSON.stringify(data)))
  //       .catch(this.handleError);
  // }

  // private handleErrors(err: HttpErrorResponse) {
  //     console.error(err.message);
  //     return Observable.throw(err.message);
  // }

}
