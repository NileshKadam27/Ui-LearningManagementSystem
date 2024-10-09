import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url==="http://localhost:8080/v1/user/register" || req.url==="http://localhost:8080/v1/user/login"){
    const authReq = req.clone({
    })
    return next(authReq);
  }else{
    const authReq = req.clone({
   
      headers: req.headers.set('Authorization', 'Bearer Code')
    })
    return next(authReq);
  }
};
