import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, private localStorage: LocalStorageService) {}

  canActivate(): boolean {
    const isLoggedIn = this.localStorage.getItem('isLoggedIn'); 
    if (isLoggedIn) {
      this.router.navigate(['/home']); 
      return false; 
    }
    return true;
  }
}
