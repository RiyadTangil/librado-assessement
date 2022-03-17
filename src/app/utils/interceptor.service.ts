// the auth intercepter is used to intercept every http request and add the jwt token to its header so that every call becomes authenticated call.
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private _auth: AuthService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._auth.get_token();
    req.headers.set('Access-Control-Allow-Origin', '*');
    req.headers.set('mode', 'no-cors');

    let sendReq: any;
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '.concat(token)),
      });
      sendReq = cloned;
    } else {
      sendReq = req;
    }

    // Setting loading true when making request

    return next
      .handle(sendReq)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      )
      .pipe(
        map((evt: HttpEvent<any>) => {
          return evt as HttpResponse<any>;
        })
      ) as Observable<HttpEvent<any>>;
  }
}
