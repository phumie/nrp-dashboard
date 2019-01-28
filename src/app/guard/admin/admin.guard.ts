import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canLoad(): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      if (currentUser.userRights) {
        if (currentUser.userRights.admin.read || currentUser.userRights.admin.write) {
          return true;
        }
      }
     }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
