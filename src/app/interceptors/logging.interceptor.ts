import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(request).pipe(
      tap({
        next: event => {
          {
            status = '';
            if (event instanceof HttpResponse) {
              status = 'succeeded';
            }
          }
        },
        error: () => {
          status = 'fail';
        },
      }),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = request.method + ' ' + request.urlWithParams + ' ' + status + ' in ' + elapsedTime + 'ms';
        this.logDetails(message);
      })
    );
  }

  private logDetails(message: string) {
    console.log(message);
  }
}
