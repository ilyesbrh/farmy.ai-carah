import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule } from '@covalent/http';
import { CovalentComponentModules } from './covalent.modules';
import { angularMaterialModules } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SigninComponent } from './landing-page/auth/signin/signin.component';
import { SignupComponent } from './landing-page/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './landing-page/auth/auth.service';
import { AuthGuard } from './landing-page/auth/auth-guard.service';
import { AcueillComponent } from './landing-page/acueill/acueill.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetPasswordComponent } from './landing-page/auth/forget-password/forget-password.component';
import { NotificationsComponent } from './home/notifications/notifications.component';

import { BasicUploaderComponent } from './home/basic-uploader/basic-uploader.component';
import { AngularOpenlayersModule } from "ngx-openlayers";
import { StoreModule } from '@ngrx/store';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { reducers } from './Store';
import { ProblemsComponent } from './home/problems/problems.component';
import { ProblemDetaillComponent } from './home/problems/problem-detaill/problem-detaill.component';
import { ExpertHomeComponent } from './expert-home/expert-home.component';
import { ExpertNotificationsComponent } from './expert-home/expert-notifications/expert-notifications.component';
import { FeedComponent } from './expert-home/feed/feed.component';
import { HistoryComponent } from './expert-home/history/history.component';
import { QuillInitializeService } from './quill/services/quillInitialize.service';
import { QuillModule } from 'ngx-quill';
import { QuillElementComponent } from './expert-home/quill-element/quill-element.component';
import { ExpertProblemDetaillComponent } from './expert-home/feed/expert-problem-detaill/expert-problem-detaill.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AcueillComponent,
    NotFoundComponent,
    ForgetPasswordComponent,
    NotificationsComponent,
    BasicUploaderComponent,
    ProblemsComponent,
    ProblemDetaillComponent,
    ExpertHomeComponent,
    ExpertNotificationsComponent,
    FeedComponent,
    HistoryComponent,
    QuillElementComponent,
    ExpertProblemDetaillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CovalentHttpModule.forRoot(),
    CovalentComponentModules,
    angularMaterialModules,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AngularOpenlayersModule,
    QuillModule,
    SweetAlert2Module.forRoot({ customClass: 'animated bounceIn' }),
    JwtModule.forRoot({
      config: {
        //tokenGetter: getToken,
        whitelistedDomains: ['*://localhost:4100/*'],
        blacklistedRoutes: []
      }
    }),
    StoreModule.forRoot(reducers),
  ],
  providers: [AuthService, AuthGuard, QuillInitializeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql' }),
      cache: new InMemoryCache()
    });
  }

}
