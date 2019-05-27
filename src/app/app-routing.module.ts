import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './landing-page/auth/signin/signin.component';
import { AcueillComponent } from './landing-page/acueill/acueill.component';
import { SignupComponent } from './landing-page/auth/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetPasswordComponent } from './landing-page/auth/forget-password/forget-password.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { BasicUploaderComponent } from './home/basic-uploader/basic-uploader.component';
import { ProblemsComponent } from './home/problems/problems.component';
import { ProblemDetaillComponent } from './home/problems/problem-detaill/problem-detaill.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { ExpertNotificationsComponent } from './expert-home/expert-notifications/expert-notifications.component';
import { FeedComponent } from './expert-home/feed/feed.component';
import { HistoryComponent } from './expert-home/history/history.component';
import { ExpertProblemDetaillComponent } from './expert-home/feed/expert-problem-detaill/expert-problem-detaill.component';

const routes: Routes = [
  {
    path: 'landingPage', component: LandingPageComponent, children:
      [
        { path: '', component: AcueillComponent },
        { path: 'login', component: SigninComponent },
        { path: 'signUp', component: SignupComponent },
        { path: 'forgetPassword', component: ForgetPasswordComponent },
        { path: '**', redirectTo: 'home' }
      ]
  },
  {
    path: 'home', component: HomeComponent, children:
      [
        { path: 'notifications', component: NotificationsComponent },
        { path: '', component: BasicUploaderComponent },
        { path: 'upload', component: BasicUploaderComponent },
        { path: 'problems', component: ProblemsComponent },
        { path: 'problem/:id', component: ProblemDetaillComponent }
      ]
  },
  {
    path: 'expert-home', component: ExpertHomeComponent, children:
      [
        { path: '', component: FeedComponent },
        { path: 'problem/:id', component: ExpertProblemDetaillComponent },
        { path: 'notifications', component: ExpertNotificationsComponent },
        { path: 'history', component: HistoryComponent }
      ]
  },
  {
    path: 'notFound', component: NotFoundComponent
  },
  { path: '**', redirectTo: 'notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
