import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('Authentication guard activated');

  const authUser = authService.verifyToken(localStorage.getItem('token') || '');

  if (authUser) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
