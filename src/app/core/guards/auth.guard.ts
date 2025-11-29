import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service'; 
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  // Check the signal value
  if (authService.isAuthenticated()) {
    return true;
  }

  // 2. Fallback: Check if we have a token in storage (Optimistic check)
  // This fixes the page-refresh race condition. If a token exists, we assume
  // the user is logged in while the AuthService fetches the profile in the background.
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }

  // 3. Not authenticated
  snackBar.open('You must be logged in to access this page', 'Close', { duration: 3000 });
  
  // Redirect to login, passing the return URL so we can go back after login
  router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
  return false;
};