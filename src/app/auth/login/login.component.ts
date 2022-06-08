import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { FormGroupModel } from 'src/app/types/form-models';
import { AuthService } from '../auth.service';
import { Person } from '../person';
import { User } from '../user';

export interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl('auser', {
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

  personForm!: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // const form: Record<keyof Person, any> = {
    //   firstName: [null],
    //   lastName: [null],
    // };
    const form: FormGroupModel<Person> = {
      firstName: ['Tumit'],
      lastName: ['Odds'],
    };
    this.personForm = this.formBuilder.group(form);
    // const v = this.personForm.controls.firstName.value;
    const a = this.loginForm.controls.username.value;
  }

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

  onReset() {
    this.loginForm.reset();
  }
}
