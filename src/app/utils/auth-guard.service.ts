// auth gaurd act as checking point which checks every request to page and if the local storate has token then only it allows the authenticated used to access the page

import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      this.authService.logout();
      return false;
    }
  }
}
