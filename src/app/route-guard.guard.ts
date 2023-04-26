import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageServiceService } from './services/storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {


  constructor(private storageService: StorageServiceService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageService.isLoggedIn()) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }

  }
}
