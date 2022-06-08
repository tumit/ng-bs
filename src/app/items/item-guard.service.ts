import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ItemsModule } from './items.module';

@Injectable({
  providedIn: ItemsModule,
})
export class ItemGuardService implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.loggedInUser.pipe(
      map(u => u.roles.includes('ADMIN'))
    );
  }
}
