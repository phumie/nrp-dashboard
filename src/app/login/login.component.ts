import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private authenticationService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
        data => {
          if (this.authenticationService.currentUserValue) {
            console.log('It looks ok');
          }
          this.router.navigate([this.returnUrl]);
        },
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
