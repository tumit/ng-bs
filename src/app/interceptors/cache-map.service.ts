import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheEntry, MAX_CACHE_AGE } from './cache-entry';
import { CacheMap } from './cache-map';

@Injectable({
  providedIn: 'root'
})
export class CacheMapService implements CacheMap {

  cacheMap = new Map<string, CacheEntry>();

  constructor() { }

  get(req: HttpRequest<unknown>): HttpResponse<unknown> | null {

    const entry = this.cacheMap.get(req.urlWithParams);
    if (!entry) {
      return null;
    }

    return this.isExpired(entry.entryTime) ? null : entry.response;
  }

  put(req: HttpRequest<unknown>, res: HttpResponse<unknown>): void {
    const entry: CacheEntry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
    this.cacheMap.set(req.urlWithParams, entry);
    this.deleteExpiredCache();
  }

  private isExpired(entryTime: number): boolean {
    return (Date.now() - entryTime) > MAX_CACHE_AGE;
  }

  private deleteExpiredCache(): void {
    this.cacheMap.forEach(entry => {
      if (this.isExpired(entry.entryTime)) {
        this.cacheMap.delete(entry.url);
      }
    });
  }

}
