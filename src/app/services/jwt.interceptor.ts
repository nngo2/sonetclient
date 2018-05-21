import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = this.authService.getToken();
        if (token) {
            // SOMEHOW cannot modify the headers
            // const modRequest = request.clone({
            //     setHeaders: {
            //         'Authorization': 'Bearer ${token}'
            //     }
            // });
            const modRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ${token}')
            });
            return next.handle(modRequest);
        }
        return next.handle(request);
    }
}
