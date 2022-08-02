import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { filter, map, Observable, of, tap } from 'rxjs';
import { CacheMapService } from './cache-map.service';

const CACHABLE_URL = "/items";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  constructor(private cache: CacheMapService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.isRequestCachable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      map(event => event as HttpResponse<unknown>),
      tap(event => this.cache.put(req, event))
    );
  }

  private isRequestCachable(req: HttpRequest<unknown>): boolean {
    return (req.method === 'GET') && (req.url.indexOf(CACHABLE_URL) > -1)
  }

}
