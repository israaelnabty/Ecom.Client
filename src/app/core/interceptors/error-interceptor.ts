import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastr = inject(ToastrService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        if (error.status === 400) {
          if (error.error.errors) {
            throw error.error; // Validation errors
          } else {
            toastr.error(error.error.message, error.status.toString());
          }
        }
        if (error.status === 401) {
          toastr.error('Unauthorized', error.status.toString());
          // Optional: Clear token and redirect to login
          // localStorage.removeItem('token');
          // router.navigateByUrl('/auth/login');
        }
        if (error.status === 404) {
          toastr.warning('Not Found', error.status.toString());
          router.navigateByUrl('/not-found');
        }
        if (error.status === 500) {
          toastr.error('Server Error - Check console for details', error.status.toString());
        }
      }
      return throwError(() => error);
    })
  );

};
