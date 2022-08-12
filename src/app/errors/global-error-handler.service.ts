import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      console.error('Backend returned status code: ', error.status)
      console.error('Response body:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }
  }
}
