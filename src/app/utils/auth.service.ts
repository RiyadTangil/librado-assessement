import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { urls } from "./urls";
import { HttpClient } from "@angular/common/http";
import { tap, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
// main service which will handle all authentication related query - login, logout, signup, gettoken, setsession, refreshtoken, isloggedin, isloggedout
export class AuthService {
  private apiroot = urls.baseUrl;
  constructor(private http: HttpClient, private _router: Router) { }

  private setsession(authResult: any): void {
    if (authResult["success"]) {
      localStorage.setItem("token", authResult?.['access_token']);
      localStorage.setItem("user_details", JSON.stringify(authResult?.['user']));
    }
  }

  // login function that post request to backend server
  public login(username: string, password: string) {
    var form = new FormData();
    form.append("email", username);
    form.append("password", password);
    return this.http.post(this.apiroot.concat("login"), form).pipe(
      tap((Response) => {
        this.setsession(Response);
      }),
      shareReplay()
    );
  }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    this._router.url === ""
      ? window.location.reload()
      : this._router.navigateByUrl("");
  }

  public signup(userDetails: any) {
    return this.http.post(this.apiroot.concat("registerUser"), userDetails).pipe(
      tap((response) => this.setsession(response)),
      shareReplay()
    );
  }

  public get_token(): string {
    return localStorage.getItem("token") + "";
  }

  public isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
