// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateHomepageModule } from './candidate-homepage/candidate-homepage.module';
import { NgPrimeModule } from './app.ngprime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StorageModule } from '@ngx-pwa/local-storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CandidateHomepageModule,
    NgPrimeModule,
    StorageModule.forRoot({ IDBNoWrap: true })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
