import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddReviewSitesComponent } from './add-review-sites/add-review-sites.component';
import { TriggerCampaignComponent } from './trigger-campaign/trigger-campaign.component';
import { ViewStatsComponent } from './view-stats/view-stats.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  { path: '', redirectTo: "default", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addLocation', component: AddLocationComponent },
  { path: 'addReview', component: AddReviewSitesComponent },
  { path: 'triggerCampaign', component: TriggerCampaignComponent },
  { path: 'viewStats', component: ViewStatsComponent },
  { path: 'signIn', component: SigninComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
