import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUsData: Array<any> = [
    {
      "id": 2,
      "about_us": "survey pageaaa.",
      "created_at": "2022-01-28T14:54:12.000+05:30",
      "updated_at": "2022-01-28T14:54:12.000+05:30"
    },
    {
      "id": 1,
      "about_us": "survey page.",
      "created_at": "2022-01-28T14:54:00.000+05:30",
      "updated_at": "2022-01-28T14:54:00.000+05:30"
    }
  ]

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this._api.GET('getAboutUs').then((res: any) => {
      if (res['success']) {
        this.aboutUsData = res['data'];
      }
    })

  }

}
