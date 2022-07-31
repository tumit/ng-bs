import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createMask } from '@ngneat/input-mask';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

export interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = new FormControl('aadmin', {
    nonNullable: true,
    validators: [Validators.required],
  });
  password = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });

  termsAndConsFormControl = new FormControl<boolean>(false);

  laserCode = new FormControl<string>('');

  laserCodeInputMask = createMask('AA9-9999999-99');

  constructor(public authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService
      .login(this.loginForm.value)
      .pipe(tap(user => console.log('user', user)))
      .subscribe({
        next: _ => this.router.navigate([this.authService.redirectURL]),
        error: err => console.log('err', err),
      });
  }

  onReset() {
    this.loginForm.reset();
  }
}
