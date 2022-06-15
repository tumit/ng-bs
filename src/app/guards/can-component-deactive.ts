import { Observable } from 'rxjs';

export interface CanComponentDeactive {
  canDeactive(): Observable<boolean> | boolean;
}
