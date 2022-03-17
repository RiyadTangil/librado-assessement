import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { values } from '../../../utils/data';
import { CdkDrag, CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-target-culture',
  templateUrl: './target-culture.component.html',
  styleUrls: ['./target-culture.component.css']
})
export class TargetCultureComponent implements OnInit {

  constructor(private _toastr: ToastrService, private _router: Router) {

  }
  renderDrag: boolean = false;
  changesDone: number = 0;
  allValues: Array<any> = [];
  valueStatementA: Array<any> = [];
  valueStatementB: Array<any> = [];
  valueStatementC: Array<any> = [];
  valueStatementD: Array<any> = [];
  valueStatementE: Array<any> = [];
  valueStatementF: Array<any> = [];
  valueStatementG: Array<any> = [];


  // sample data 
  allTargetSubmissions: any = [];
  companyData: any;
  userData: any;


  ngOnInit(): void {
    this.setData();
    this.allTargetSubmissions = JSON.parse(
      localStorage.getItem('allTargetSubmissions') || '[]'
    );
    this.companyData = JSON.parse(
      localStorage.getItem('currentCompanyData') || '{}'
    );
    this.userData = JSON.parse(
      localStorage.getItem('user_details') || '{}'
    );
  }
  currentRank: Array<string> = [];
  targetRank: Array<string> = [];

  setData() {
    this.allValues = values;

    for (let index = 0; index < this.allValues.length; index++) {
      (index >= 0) && (index < 6) && (this.valueStatementA.push(this.allValues[index]));
      (index >= 6) && (index < 13) && (this.valueStatementB.push(this.allValues[index]));
      (index >= 13) && (index < 20) && (this.valueStatementC.push(this.allValues[index]));
      (index >= 20) && (index < 27) && (this.valueStatementD.push(this.allValues[index]));
      (index >= 27) && (index < 34) && (this.valueStatementE.push(this.allValues[index]));
      (index >= 34) && (index < 41) && (this.valueStatementF.push(this.allValues[index]));
      (index >= 41) && (index < 48) && (this.valueStatementG.push(this.allValues[index]));
    }
    this.renderDrag = true;
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let oldArr = this.getArrById(event.previousContainer.id);
      let newArr = this.getArrById(event.container.id);
      let oldIndex = event.previousIndex;
      let newIndex = event.currentIndex;
      if (oldArr[oldIndex] && newArr[newIndex]) {
        var b = oldArr[oldIndex];
        oldArr[oldIndex] = newArr[newIndex];
        newArr[newIndex] = b;
      }
    }
    this.changesDone++;
  }

  getArrById(id: string) {
    let returnArr: string[] = [];
    id == 'valueStatementA' && (returnArr = this.valueStatementA);
    id == 'valueStatementB' && (returnArr = this.valueStatementB);
    id == 'valueStatementC' && (returnArr = this.valueStatementC);
    id == 'valueStatementD' && (returnArr = this.valueStatementD);
    id == 'valueStatementE' && (returnArr = this.valueStatementE);
    id == 'valueStatementF' && (returnArr = this.valueStatementF);
    id == 'valueStatementG' && (returnArr = this.valueStatementG);
    return returnArr;
  }

  validateTransfer(event: any) {
    console.log(event);
    let value2Current = (event.container.id === 'currentRank') && (event.previousContainer.id === 'valueStatement')
    let value2Target = (event.container.id === 'targetRank') && (event.previousContainer.id === 'valueStatement')
    let holdItem = event.previousContainer.data[event.previousIndex];
    let alreadyExist = event.container.data.includes(holdItem);
    return (value2Current || value2Target) && (!alreadyExist);
  }

  isDisabled(item: string) {
    let inCurrent = this.currentRank.includes(item);
    let inTarget = this.targetRank.includes(item);
    return (inCurrent && inTarget);

  }

  saveData() {
    let newAlignment = [...this.valueStatementA, ...this.valueStatementB, ...this.valueStatementC, ...this.valueStatementD, ...this.valueStatementE, ...this.valueStatementF, ...this.valueStatementG];
    console.log(newAlignment);

    let userAssmentIndex = this.allTargetSubmissions.findIndex((item: any) => {
      return (item.userID == 1)
    });
    console.log(userAssmentIndex);

    let obj = {
      userID: 1,
      valueRanking: newAlignment
    }

    userAssmentIndex = -1;

    if (true) {
      userAssmentIndex >= 0 && (this.allTargetSubmissions[userAssmentIndex] = obj)
      userAssmentIndex < 0 && (this.allTargetSubmissions.push(obj))

      localStorage.setItem('allTargetSubmissions', JSON.stringify(this.allTargetSubmissions));
      this._toastr.success('Ranking Submited', 'Success');
      this._router.navigateByUrl('/accelerator-programme');

    } else {
      this._toastr.error('Company Information Missing', 'Error');
      this._router.navigateByUrl('/home');
    }



  }

}
