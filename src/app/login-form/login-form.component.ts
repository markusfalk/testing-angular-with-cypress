import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: '',
      remember: false
    });
  }

  login() {
    this.loginService.login().subscribe(() => {
      this.router.navigate(['dashboard']);
    });
  }

}
