import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { CommonData } from './common/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }, //url #号问题
    { provide: 'commonData', useClass: CommonData },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
