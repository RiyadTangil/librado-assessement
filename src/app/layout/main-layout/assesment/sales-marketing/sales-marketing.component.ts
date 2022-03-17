import { Router } from '@angular/router';
import { GlobalDataService } from './../../../../utils/data/global-data.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sales-marketing',
  templateUrl: './sales-marketing.component.html',
  styleUrls: ['./sales-marketing.component.css']
})
export class SalesMarketingComponent implements OnInit {

  constructor(private _globalData: GlobalDataService, private _router: Router, private _toastr: ToastrService) {
    console.log();
  }

  quetionareData: Array<any> = [
    {
      "question_type": "MCQ",
      "question": "The executive team is healthy and aligned. (meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Everyone is aligned with the #1 thing that needs to be accomplished this quarter to move the company forward. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Communication rhythm is established, and information moves through organization accurately and quickly. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Every facet of the organization has a person assigned with accountability for ensuring goals are met. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": " Ongoing employee input is collected to identify obstacles and opportunities. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Reporting and analysis of customer feedback data is as frequent and accurate as financial data. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Core Values and Purpose are “alive” in the organization. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "The executive members define realistic sales target.",
      "option_info": "",
    },
  ]

  ngOnInit(): void {
    this.currentCategory = this._router.url.split('/')[2];


  }

  currentCategory: string = '';
  submit(){

    let targetCost = this.quetionareData.length * 5;
    let currentCost: number = 0;
    this.quetionareData.forEach((data) => {
      currentCost = currentCost + data.selected;
    })

    this._globalData.addReport({
      "statement": this.currentCategory,
      "current_score": currentCost,
      "target_score": targetCost
    })

    this._toastr.success('Assesment Submitted', 'Success');
    this._router.navigateByUrl('/report');

  }

  calcReport() {

  }

}
