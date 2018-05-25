import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { OlprrReviewSearchFilter } from './olprr-review-search-filter';
import { OlprrReviewSearchResult } from './olprr-review-search-result';
import { LogPublisherConfig } from '../shared/log-publishers';

@Injectable()
export class OlprrReviewSearchDataService {

  private loggers: LogPublisherConfig[] = [];

  // constructor(@Inject(forwardRef(() => LogService)) private logService: LogService) { }
  constructor(private http: HttpClient) {}
  getOlprrReviewIncidents(olprrReviewSearchFilter: OlprrReviewSearchFilter): Observable<OlprrReviewSearchResult[]> {
    const params = new HttpParams({
        fromString: `office=${olprrReviewSearchFilter.office}&status=${olprrReviewSearchFilter.status}`
    });
    console.log('****** params ***');
    console.log(params);
    return this.http.get<OlprrReviewSearchResult[]>(environment.olprrapi_review_search, { params: params });
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
