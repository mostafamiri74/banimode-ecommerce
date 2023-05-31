import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.token;

    if (token) {
      // request = request.clone({
      //   headers: request.headers.set('Authorization', token),
      // });
      console.log('token:' + token);
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          alert('access denied');
          this.router.navigate(['login']);
        }

        if (err.status === 500) {
          alert('خطا در ارتباط با سرور');
        }

        return throwError(err);
      })
    );
  }
}
