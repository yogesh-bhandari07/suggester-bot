import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly AUTH_KEY = "isAuthenticated";

  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  login() {
    this.localStorage.setItem(this.AUTH_KEY, "true");
  }

  logout() {
    this.localStorage.removeItem(this.AUTH_KEY);
    this.router.navigate(["/login"]);
  }

  isLoggedIn(): boolean {
    return this.localStorage.getItem(this.AUTH_KEY) === "true";
  }
}
