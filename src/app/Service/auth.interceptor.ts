import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

// Aquí el interceptor se convierte en una función
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

 // Define endpoints públicos (los que NO deben incluir token)
 const isPublicEndpoint = req.url.includes('/auth/login') || req.url.includes('/auth/register');

 // Solo agrega el token si la petición no es pública
 if (token && !isPublicEndpoint) {
   const authReq = req.clone({
     setHeaders: {
       Authorization: `Bearer ${token}`,
     },
   });
   return next(authReq);
 }

 return next(req);
};
