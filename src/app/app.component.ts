import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'body',
  template: `
    <router-outlet></router-outlet> 
  `
})
export class AppComponent {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    apollo: Apollo, httpLink: HttpLink) {
    var grqphqlUrl = environment.dataServer;
    apollo.create({
      link: createUploadLink({
        uri: `${grqphqlUrl}/graphql`,
        credentials: "include"
      }),
      cache: new InMemoryCache()
    });
    this.setWebSiteTitle();
  }

  private setWebSiteTitle() {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
      });
  }

}