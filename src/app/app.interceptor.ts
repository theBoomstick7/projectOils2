import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { mergeMap, Observable, tap } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    accessToken:string | null = localStorage.getItem(`accessToken`)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
       if(this.accessToken)
       {
        return next.handle(req.clone({ setHeaders: {'X-Authorization' : this.accessToken}}))
    }
        else 
        {
            return next.handle(req.clone())
        }
    }
    }

    export const AppInterceptorProvider: Provider = {
        provide:HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi:true
    }