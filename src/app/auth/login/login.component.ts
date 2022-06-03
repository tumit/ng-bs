import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl('', Validators.required);
  password = new FormControl('');

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.authService
      .login(this.loginForm.value)
      .pipe(tap(user => console.log('user', user)))
      .subscribe({
        next: _ =>
          this.router.navigate([
            this.authService.redirectURL,
          ]),
        error: err => console.log('err', err),
      });
  }
}
