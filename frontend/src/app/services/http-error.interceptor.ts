import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {SimpleModalComponent} from "../lib/simple-modal/simple-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private modalService: NgbModal) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
          console.error(errorMessage);
        } else {
          errorMessage = error.error;
          this.openErrorModal(errorMessage)
        }
        return throwError(errorMessage);
      })
    )
  }

  openErrorModal(errorMessage: string): void {
    const modalRef = this.modalService.open(SimpleModalComponent);
    modalRef.componentInstance.title = 'An error occurred: ';
    modalRef.componentInstance.text = `${errorMessage}`;
    modalRef.componentInstance.confirmText = 'Ok';
  }
}
