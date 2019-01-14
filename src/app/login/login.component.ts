import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authenticationService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  employeeLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }

    const username = this.form.username.value;
    const password = this.form.password.value;
    this.authenticationService.employeeLogin(username, password)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  clientLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }

    const username = this.form.username.value;
    const password = this.form.password.value;
    this.authenticationService.clientLogin(username, password)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
