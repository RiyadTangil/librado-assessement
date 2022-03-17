import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../utils/auth.service';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginData: any = {
    email: '',
    password: ''
  }
  isRememberMe: boolean = false;

  signUpData: any = {
    name: '',
    email: '',
    password: '',
    account_type: "USER"
  }

  constructor(private router: Router, private _api: ApiService, private _auth: AuthService, private _toastr: ToastrService) { }

  showLog=true

  login(){
    this._auth.login(this.loginData.email, this.loginData.password).subscribe((res: any) => {
      console.log(res);
      if (res['success']) {
        this.router.navigate(['/home'])

      }
    })
  }

  signUp() {
    console.log(this.signUpData);
    this._auth.signup(this.signUpData).subscribe((res: any) => {
      console.log(res);
      if (res['success']) {
        this._toastr.success('Account Created', 'Success');
        this.showLog = true;
      }
    })

  }

  ngOnInit(): void {
  }

}
