import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientAddGuard implements CanActivate {

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

    this.router.navigate(['/admin/suppliers']);
    return false;
  }
}
