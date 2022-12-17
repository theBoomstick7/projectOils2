import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn:`root`
})
export class authGuard implements CanActivate {
    constructor(private authService : AuthService, private router : Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
        const {mustBeLogged} = route.data
        const accessToken = localStorage.getItem('accessToken')

       if(!accessToken && mustBeLogged == false){
        return true
       } 
       else if (accessToken && mustBeLogged == true) {
        return true
       }
       return this.router.parseUrl(`/error`)
    }
}