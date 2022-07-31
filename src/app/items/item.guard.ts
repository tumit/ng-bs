import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ItemGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild(_childRoute: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.loggedInUser.pipe(map(u => u.roles.includes('ADMIN')));
  }
}
