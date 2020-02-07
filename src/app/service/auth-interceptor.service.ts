import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  key:any;
  constructor(private store:RegisterService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     this.store.store.get("key").subscribe(res => this.key = res)
     const token = this.key;
    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }

}

