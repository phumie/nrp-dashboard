import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
    if (currentUser && currentUser.userRights !== null && currentUser.userRights.admin !== null &&
      (currentUser.userRights.admin.read || currentUser.userRights.admin.write)) {
      return true;
    }

    this.router.navigate([url]);
    return false;
  }
}
