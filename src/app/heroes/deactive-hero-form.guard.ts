import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactive } from '../guards/can-component-deactive';

@Injectable()
export class DeactiveHeroFormGuard
  implements CanDeactivate<CanComponentDeactive>
{
  canDeactivate(
    component: CanComponentDeactive,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    _nextState?: RouterStateSnapshot | undefined
  ): Observable<boolean> | boolean {
    return component.canDeactive();
  }
}
