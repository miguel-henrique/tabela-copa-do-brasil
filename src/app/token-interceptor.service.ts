import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TimeService } from './services/time.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }

  intercept(req, next){
    const token = 'test_317811c1f0ace176bf6398e3f32a77'
    const tokenizedReq = req.clone({
        setHeaders: {
        Authorization: 'Bearer test_317811c1f0ace176bf6398e3f32a77'
      }
    })
    return next.handle(tokenizedReq)
  }
}
