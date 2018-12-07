import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap, switchMap, shareReplay, share } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Navigation, Page, Preset, ExternalLink } from '../_model';

/**
 * A service to get data from CosmicJS.
 */
@Injectable({
  providedIn: 'root'
})
export class CosmicService {
  constructor(private http: HttpClient) {}

  private commonPath = environment.URL + environment.bucket_slug;
  private objectTypePath = this.commonPath + '/object-type';

  private singleObjectUrl = this.commonPath + '/object';
  private singleObjectByIdUrl = this.commonPath + '/object-by-id';

  private navigationsUrl = this.objectTypePath + '/navigations';
  private pagesUrl = this.objectTypePath + '/pages';
  private presetsUrl = this.objectTypePath + '/presets';
  private externalLinksUrl = this.objectTypePath + '/external-links';

  private navigations$: Observable<Navigation[]>;
  private navigation$ = new Map<string, Observable<Navigation>>();
  private pages$: Observable<Page[]>;
  private page$ = new Map<string, Observable<Page>>();
  private presets$: Observable<Preset[]>;
  private preset$ = new Map<string, Observable<Preset>>();
  private externalLinks$: Observable<ExternalLink[]>;
  private externalLink$ = new Map<string, Observable<ExternalLink>>();

  /** GET all presets from the cosmicjs server */
  getNavigations(): Observable<Navigation[]> {
    if (!this.navigations$) {
      this.navigations$ = this.http.get<Navigation[]>(this.navigationsUrl).pipe(
        tap(_ => console.log('fetched navigations')),
        map(_ => {
          return _['objects'].map(element => new Navigation(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getNavigations', []))
      );
    }
    return this.navigations$;
  }

  /** GET preset by id. Will 404 if id not found */
  getNavigation(id: string): Observable<Navigation> {
    if (!this.navigation$.get(id)) {
      const url = `${this.singleObjectByIdUrl}/${id}`;
      const response = this.http.get<Navigation>(url).pipe(
        tap(_ => console.log(`fetched navigation: ${id}`)),
        map(_ => {
          return new Navigation(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<Navigation>(`getNavigation: ${id}`))
      );
      this.navigation$.set(id, response);
    }
    return this.navigation$.get(id);
  }

  /** GET all pages from the cosmicjs server */
  getPages(): Observable<Page[]> {
    if (!this.pages$) {
      this.pages$ = this.http.get<Page[]>(this.pagesUrl).pipe(
        tap(_ => console.log('fetched pages')),
        map(_ => {
          return _['objects'].map(element => new Page(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getPages', []))
      );
    }
    return this.pages$;
  }

  /** GET page by slug. Will 404 if slug not found */
  getPage(slug: string): Observable<Page> {
    if (!this.page$.get(slug)) {
      const url = `${this.singleObjectUrl}/${slug}`;
      const response = this.http.get<Page>(url).pipe(
        tap(_ => console.log(`fetched page: ${slug}`)),
        map(_ => {
          return new Page(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<Page>(`getPage: ${slug}`))
      );
      this.page$.set(slug, response);
    }
    return this.page$.get(slug);
  }

  /** GET all presets from the cosmicjs server */
  getPresets(): Observable<Preset[]> {
    if (!this.presets$) {
      this.presets$ = this.http.get<Preset[]>(this.presetsUrl).pipe(
        tap(_ => console.log('fetched presets')),
        map(_ => {
          return _['objects'].map(element => new Preset(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getPresets', []))
      );
    }
    return this.presets$;
  }

  /** GET preset by slug. Will 404 if slug not found */
  getPreset(slug: string): Observable<Preset> {
    if (!this.preset$.get(slug)) {
      const url = `${this.singleObjectUrl}/${slug}`;
      const response = this.http.get<Preset>(url).pipe(
        tap(_ => console.log(`fetched preset: ${slug}`)),
        map(_ => {
          return new Preset(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<Preset>(`getPreset: ${slug}`))
      );
      this.preset$.set(slug, response);
    }
    return this.preset$.get(slug);
  }

  /** GET all external links from the cosmicjs server */
  getExternalLinks(): Observable<ExternalLink[]> {
    if (!this.externalLinks$) {
      this.externalLinks$ = this.http.get<ExternalLink[]>(this.externalLinksUrl).pipe(
        tap(_ => console.log('fetched external links')),
        map(_ => {
          return _['objects'].map(element => new ExternalLink(element));
        }),
        shareReplay(1),
        catchError(this.handleError('getExternalLinks', []))
      );
    }
    return this.externalLinks$;
  }

  /** GET external link by id. Will 404 if id not found */
  getExternalLink(id: string): Observable<ExternalLink> {
    if (!this.externalLink$.get(id)) {
      const url = `${this.singleObjectByIdUrl}/${id}`;
      const response = this.http.get<ExternalLink>(url).pipe(
        tap(_ => console.log(`fetched external link: ${id}`)),
        map(_ => {
          return new ExternalLink(_['object']);
        }),
        shareReplay(1),
        catchError(this.handleError<ExternalLink>(`getExternalLink: ${id}`))
      );
      this.externalLink$.set(id, response);
    }
    return this.externalLink$.get(id);
  }

  /** Shortcut to GET main preset
   * If param includeNavigation == true it will get the navigation
   * and append it to the returned object
   * @param includeNavigation - optional value to get navigation
   */
  getMainPresets(includeNavigation?: boolean): Observable<Preset> {
    if (includeNavigation) {
      return this.getPreset(environment.presets).pipe(
        switchMap(response => {
          return forkJoin([of(response), this.getNavigation(response.mainNavigation._id)]);
        }),
        map(res => {
          res[0].mainNavigation = res[1];
          return res[0];
        })
      );
    } else {
      return this.getPreset(environment.presets);
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
