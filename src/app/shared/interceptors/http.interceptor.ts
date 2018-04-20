import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class GenericHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('invoked - show loader');
    return next.handle(req).pipe(
      catchError(response => {
        if (response instanceof HttpErrorResponse) {
          console.error(response.error);
        } else if (response instanceof TimeoutError) {
          console.error(response);
        }
        return throwError(response);
      }),
      finalize(() => {
        console.log('done - hide loader');
      }));
  }
}
