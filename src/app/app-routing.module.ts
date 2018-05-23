import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidentComponent } from './incident/incident.component';

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
  { path: 'search', component: IncidentComponent },
  // { path: 'searchresults', component: SearchResultsComponent },
  // {
  //   path: 'search',
  //   component: LustSearchContainerComponent,
  //   resolve: {
  //     data: PageResolver,
  //   }
  // },
  { path: '', redirectTo: 'olprr', pathMatch: 'full' },
  { path: 'olprr', component: IncidentComponent,
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
  { path: '**', redirectTo: 'olprr', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
