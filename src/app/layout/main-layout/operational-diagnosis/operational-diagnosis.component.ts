import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/utils/data/global-data.service';
import { questions } from 'src/app/utils/data';

@Component({
  selector: 'app-operational-diagnosis',
  templateUrl: './operational-diagnosis.component.html',
  styleUrls: ['./operational-diagnosis.component.css'],
})
export class OperationalDiagnosisComponent implements OnInit {
  allQuestions: any = {};
  showQuestions: Array<any> = [];
  questionKeys: Array<string> = [];
  currentQuestion: number = 0;
  position: number = 0;
  constructor(
    private _globalData: GlobalDataService,
    private _toastr: ToastrService,
    private _router: Router
  ) {
    this.allQuestions = questions;
    this.questionKeys = Object.keys(this.allQuestions);
    this.showQuestions =
      this.allQuestions[this.questionKeys[this.currentQuestion] + ''];
  }
  ngOnInit(): void {
    this._globalData.checkAssmentTaker.subscribe((res: any) => {
      this.position = +res['position'] || 0;
      console.log(res);
    });
  }
  submit() {
    let isAll = false;
    isAll = this.showQuestions.every((item) => item.selected);
    if (isAll) {
      let string = localStorage.getItem('operationDiagnosis') || '[]';
      let operationDiagnosis = JSON.parse(string);
      operationDiagnosis.push({
        question: this.questionKeys[this.currentQuestion],
        data: this.showQuestions,
      });
      localStorage.setItem(
        'operationDiagnosis',
        JSON.stringify(operationDiagnosis)
      );

      if (this.currentQuestion < this.questionKeys.length) {
        this.currentQuestion++;
        this.showQuestions =
          this.allQuestions[this.questionKeys[this.currentQuestion] + ''];
        console.log(this.currentQuestion, this.showQuestions);
      }
      this.currentQuestion === this.questionKeys.length &&  ( this._router.navigateByUrl('/report'));
      this._toastr.success('Questionare Save');
    } else {
      this._toastr.error('Please Complete The Questionare');
    }
  }
}
