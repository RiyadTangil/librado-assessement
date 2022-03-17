import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqData: Array<any> = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this._api.GET('getFAQ').then((res: any) => {

      res['success'] && (this.faqData = res['data']);
    })


  }

}
