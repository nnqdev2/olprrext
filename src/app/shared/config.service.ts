import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError, retry, tap } from 'rxjs/operators';


// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/operator/map';
// import 'rxjs/operator/catch';
// import 'rxjs/observable/throw';

import { LogPublisher, LogConsole, LogLocalStorage, LogWebApi, LogPublisherConfig } from './log-publishers';

export class IConfig {
    contractorUid: string;
    contractorPwd: string;
    confirmationtypeUrl: string;
    countyUrl: string;
    discoverytypeUrl: string;
    quadrantUrl: string;
    releaseCauseTypeUrl: string;
    sitetypeUrl: string;
    stateUrl: string;
    streettypeUrl: string;
    incidentUrl: string;
}

const APP_CONFIG_URL = './assets/config.json';

@Injectable()
export class ConfigService {


  private configUrl = './assets/config.json';
  private responseStatus: number;

  constructor(private http: HttpClient) { }

  // getConfig(): Observable<IConfig> {
  //   console.error('*************** ConfigService getConfigs =====' );
  //   return this.http.get<IConfig>('./assets/config.json');
  // }

  getConfig(): Observable<IConfig> {
    console.error('*************** ConfigService getConfig' );
    return this.http.get<IConfig>('./assets/config.json');
  }

}
