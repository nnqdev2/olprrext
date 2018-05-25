import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentComponent } from './incident/incident.component';
import { OlprrReviewSearchFilterComponent } from './olprr-review-search/olprr-review-search-filter/olprr-review-search-filter.component';

import { SiteTypesResolver } from './site-types-resolver.service';
import { ConfirmationTypesResolver } from './confirmation-types-resolver.service';
import { CountiesResolver } from './counties-resolver.service';
import { DiscoveryTypesResolver } from './discovery-types-resolver.service';
import { QuadrantsResolver } from './quadrants-resolver.service';
import { ReleaseCauseTypesResolver } from './release-cause-types-resolver.service';
import { SourceTypesResolver } from './source-types-resolver.service';
import { StatesResolver } from './states-resolver.service';
import { StreetTypesResolver } from './street-types-resolver.service';

const routes: Routes = [
  // { path: '', redirectTo: 'olprrsearch', pathMatch: 'full' },
  // { path: '**', redirectTo: 'olprrsearch', pathMatch: 'full' },
  { path: 'incident', component: IncidentComponent,
      resolve: {
        siteTypes: SiteTypesResolver,
        confirmationTypes: ConfirmationTypesResolver,
        counties: CountiesResolver,
        discoveryTypes: DiscoveryTypesResolver,
        quadrants: QuadrantsResolver,
        releaseCauseTypes: ReleaseCauseTypesResolver,
        sourceTypes: SourceTypesResolver,
        states: StatesResolver,
        streetTypes: StreetTypesResolver,
      }
  },
  { path: 'olprrsearch', component: OlprrReviewSearchFilterComponent,
      resolve: {
        siteTypes: SiteTypesResolver,
      }
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
