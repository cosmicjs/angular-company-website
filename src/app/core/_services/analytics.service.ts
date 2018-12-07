import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var ga: Function;

/**
 * A service to send events to Google Analytics.
 */
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview');
      }
    });
  }
}
