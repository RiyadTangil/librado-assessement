import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './../../../utils/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';

  currentPage: string = '';

  constructor(public _auth: AuthService, private _router: Router) { }


  ngOnInit(): void {
    this._router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let currentRoute = val['urlAfterRedirects'];

        switch (currentRoute) {
          case '/home':
            this.currentPage = 'Home'
            break;
          case '/assesment':
            this.currentPage = 'Assesment'
            break;
          case '/current-culture':
            this.currentPage = 'Current Culture Assesment'
            break;
          case '/target-culture':
            this.currentPage = 'Target Culture Assesment'
            break;
          case '/happiness-factor':
            this.currentPage = 'Happiness Factor'
            break;
          case '/report':
            this.currentPage = 'Reports'
            break;

          default:
            break;
        }
      }
    });
  }

}
