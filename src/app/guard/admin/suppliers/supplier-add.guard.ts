import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierAddGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivate(): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && (currentUser.userRights != null)) {
      if (currentUser.userRights.admin.write) {
        return true;
      }
    }

    this.router.navigate(['/admin/clients']);
    return false;
  }
}
