// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateHomepageModule } from './candidate-homepage/candidate-homepage.module';
import { NgPrimeModule } from './app.ngprime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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
    NgPrimeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
