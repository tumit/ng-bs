import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  filter,
  Observable,
  of,
  throwError,
} from 'rxjs';
import { User } from './user';

//
export const URL_LOGIN = '/auth/login';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth states
  isLoggedIn = false;
  redirectURL = '';

  private loggedInUser$ = new BehaviorSubject<User>(
    {} as User
  );

  constructor(private router: Router) {
    const storedUser =
      sessionStorage.getItem(LOGGED_IN_USER);
    if (storedUser) {
      this.isLoggedIn = true;
      this.loggedInUser$.next(
        JSON.parse(storedUser) as User
      );
    }

    // store logged user when new logged user is coming
    this.loggedInUser
      .pipe(filter(user => !!user.username))
      .subscribe(loggedInUser =>
        sessionStorage.setItem(
          LOGGED_IN_USER,
          JSON.stringify(loggedInUser)
        )
      );
  }

  get loggedInUser(): Observable<User> {
    return this.loggedInUser$.asObservable();
  }

  login(loginForm: {
    username: string;
    password: string;
  }): Observable<User> {
    if (loginForm.username !== loginForm.password) {
      return throwError(() => ({
        status: 401,
        message: 'Not authenticated',
      }));
    }

    this.isLoggedIn = true;
    const roles = loginForm.username.includes('admin')
      ? ['ADMIN']
      : ['USER'];

    this.loggedInUser$.next({
      username: loginForm.username,
      roles: roles,
      lastLogin: new Date(),
    } as User);

    return this.loggedInUser;
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.removeItem(LOGGED_IN_USER);
    this.loggedInUser$.next({} as User);
    this.router.navigate([URL_LOGIN]);
  }
}
