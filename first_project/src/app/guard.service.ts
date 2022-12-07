import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

 
@Injectable()
export class Guard implements CanActivate{
    canActivate():boolean {
        let s=localStorage.getItem('loginsucessfully') ?? ''
        return JSON.parse(s)
    }

}