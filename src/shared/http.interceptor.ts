import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer Code')
  })
  return next(authReq);
};
