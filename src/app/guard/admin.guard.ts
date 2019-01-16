import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }

    $(document).ready(function(){
      alert("Access not permitted.");
    });
    this.router.navigate([url]);
    return false;
  }
}
