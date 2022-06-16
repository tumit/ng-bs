import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, URL_LOGIN } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectURL = state.url;
    this.router.navigate([URL_LOGIN]);
    return false;
  }

  canLoad(route: Route, _segments: UrlSegment[]): boolean {
    if (this.authService.isLoggedIn) {
      console.log('canLoad');
      return true;
    }

    this.authService.redirectURL = route.path || '';
    this.router.navigate([URL_LOGIN]);
    console.log('cannotLoad');
    return false;
  }
}
