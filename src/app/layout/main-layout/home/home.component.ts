import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/utils/data/global-data.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _api: ApiService, private _toastr: ToastrService, private _globalData: GlobalDataService, private _router: Router) { }



  companyData: any = {
    name: 0,
    location: '',
    annualTurnOver: '',
    role: 0
  };
  allCompanyRecords: Array<any> = [
    {
      id: 1,
      name: 'A Company',
    },
    {
      id: 2,
      name: 'B Company',
    },
    {
      id: 3,
      name: 'C Company',
    },
  ];
  allRoles: Array<any> = [
    {
      id: 1,
      name: 'Executive and Sr. Management (C-level/VP/Sr Director,Director)',
    },
    {
      id: 2,
      name: 'Manager/Supervisor',
    },
    {
      id: 3,
      name: 'Employee (Non-Manager)',
    },
  ];

  assmentInfo: any; 

  ngOnInit(): void {
    this._globalData.checkAssmentTaker.subscribe((res) => {
      console.log(res);
      this.assmentInfo = res;
    })
  }
  saveInfo() {
    this._globalData.changeAssmentInfo(this.assmentInfo);
    this._toastr.success('Profile Saved')
    this._router.navigateByUrl('/assesment')
  }
}
