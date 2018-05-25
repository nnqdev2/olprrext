import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
// import { catchError, tap, retry} from 'rxjs/operators';

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
import { map, share, tap} from 'rxjs/operators';

@Injectable()
export class LustDataService {

  private loggers: LogPublisherConfig[] = [];

  // private confirmationTypes: ConfirmationType[];
  // private confirmationTypeObservable: Observable<ConfirmationType[]>;

  // constructor(@Inject(forwardRef(() => LogService)) private logService: LogService) { }
  constructor(private http: HttpClient) {
  }


  getConfirmationTypes(): Observable<ConfirmationType[]> {
    // console.log('************HEY HEY HEY HERE I AM 1');
    // if (this.confirmationTypes != null && this.confirmationTypes.length > 0) {
    //   console.log('************Ive been to the backside');
    //   return of(this.confirmationTypes);
    // }
    // console.log('************HEY HEY HEY HERE I AM 2');
    // if (this.confirmationTypeObservable) {
    //   return this.confirmationTypeObservable;
    // }
    // console.log('************HEY HEY HEY HERE I AM 3');

    // this.http.get<ConfirmationType[]>(environment.olprrapi_confirmationtype)
    // .pipe(
    //   tap(data => console.log('************HEY HEY HEY HERE I AM 4')),
    //   map( (data: any)  => {

    //     data.response.map( entry => ({entry => this.confirmationTypes = entry } as ConfirmationType ));
    //     this.confirmationTypeObservable = null;
    //     console.log('************WHEREWHEREAMI response');
    //     console.log(data);
    //     console.log('************WHEREWHEREAMI this.confirmationTypes ');
    //     console.log(this.confirmationTypes );
    //     return this.confirmationTypes;
    //   }),
    //   share()
    // );
    // // return this.confirmationTypeObservable;
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
