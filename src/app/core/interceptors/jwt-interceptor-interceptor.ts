import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  // 1. Get token from local storage
  const token = localStorage.getItem('token');

  // 2. Clone request and attach header if token exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // 3. Pass to next handler
  return next(req);
  
};
