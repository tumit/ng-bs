import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, timer } from 'rxjs';

@Injectable()
export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // console.log('preload ', route);
    if (route.data && route.data['preload']) {
      let delay: number = route.data['delay'];
      // console.log(
      //   'preload called on ' +
      //     route.path +
      //     ' delay in ' +
      //     delay
      // );
      return timer(delay).pipe(
        mergeMap(_ => {
          // console.log('Loading now ' + route.path);
          return load();
        })
      );
    }

    return of(null);
  }
}
