import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LogService } from './shared/log.service';
import { LogPublishersService } from './shared/log-publishers.service';
import { ConfigService } from './shared/config.service';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { IncidentComponent } from './incident/incident.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppErrorHandler } from './shared/app-error-handler';
import { ShowAllMessagesComponent } from './show-all-messages/show-all-messages/show-all-messages.component';


import { IncidentDataService } from './incident/incident-data.service';
import { LustDataService } from './services/lust-data.service';
import { RequestCache, RequestCacheWithMap } from './services/request-cache.service';

import { SiteTypesResolver } from './site-types-resolver.service';
import { ConfirmationTypesResolver } from './confirmation-types-resolver.service';
import { CountiesResolver } from './counties-resolver.service';
import { DiscoveryTypesResolver } from './discovery-types-resolver.service';
import { QuadrantsResolver } from './quadrants-resolver.service';
import { ReleaseCauseTypesResolver } from './release-cause-types-resolver.service';
import { SourceTypesResolver } from './source-types-resolver.service';
import { StatesResolver } from './states-resolver.service';
import { StreetTypesResolver } from './street-types-resolver.service';
import { OlprrReviewSearchFilterComponent } from './olprr-review-search/olprr-review-search-filter/olprr-review-search-filter.component';
import { OlprrReviewSearchResultComponent } from './olprr-review-search/olprr-review-search-result/olprr-review-search-result.component';
import { TestComponent } from './test/test/test.component';
import { TabComponent } from './test/test/tab.component';
import { TabsComponent } from './test/test/tabs.component';

@NgModule({
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , HttpClientModule
    , NgbModule.forRoot()
    , AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IncidentComponent,
    ShowErrorsComponent,
    ShowAllMessagesComponent,
    OlprrReviewSearchFilterComponent,
    OlprrReviewSearchResultComponent,
    TestComponent,
    TabsComponent,
    TabComponent
  ],
  providers: [
    httpInterceptorProviders,
    LogService, LogPublishersService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    {provide: RequestCache, useClass: RequestCacheWithMap },
    ConfigService,
    LustDataService,
    IncidentDataService,
    SiteTypesResolver,
    ConfirmationTypesResolver,
    CountiesResolver,
    DiscoveryTypesResolver,
    QuadrantsResolver,
    ReleaseCauseTypesResolver,
    SourceTypesResolver,
    StatesResolver,
    StreetTypesResolver,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
