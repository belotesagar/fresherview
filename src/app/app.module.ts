import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddReviewSitesComponent } from './add-review-sites/add-review-sites.component';
import { TriggerCampaignComponent } from './trigger-campaign/trigger-campaign.component';
import { ViewStatsComponent } from './view-stats/view-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddLocationComponent,
    AddReviewSitesComponent,
    TriggerCampaignComponent,
    ViewStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
