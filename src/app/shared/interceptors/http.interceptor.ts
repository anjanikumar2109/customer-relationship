import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { Observable } from 'rxjs/Observable';
import { TimeoutError } from 'rxjs/util/TimeoutError';

@Injectable()
export class GenericHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('invoked - show loader');
    return next.handle(req)
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.error(response.error);
        } else if (response instanceof TimeoutError) {
          console.error(response);
        }
        return Observable.throw(response);
      })
      .finally(() => {
        console.log('done - hide loader');
      });
  }
}
