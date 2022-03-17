import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { values } from '../../../utils/data';

@Component({
  selector: 'app-value-dragable',
  templateUrl: './value-dragable.component.html',
  styleUrls: ['./value-dragable.component.css']
})
export class ValueDragableComponent implements OnInit {

  @Input() type: string | undefined = '';

  constructor(private _router: Router, private _toastr: ToastrService) {
  }

  // sample data 
  allSubmissions: Array<any> = [];
  companyData: any;
  userData: any;
  allValues: any;
  mostLeastDone: boolean = false;


  mostLikelyA: Array<any> = [];
  allValuesA: Array<any> = [];
  leastLikelyA: Array<any> = [];


  ngOnInit(): void {
    console.log(this.type);

    this.allSubmissions = this.type === 'current' ? JSON.parse(
      localStorage.getItem('allCurrentSubmissions') || '[]'
    ) : JSON.parse(
      localStorage.getItem('allTargetSubmissions') || '[]'
    );
    this.allValuesA = [...values];
  }



  submit() {
    let saveData = [...this.leastLikelyA, ...this.mostLikelyA]
    console.log(saveData)
    this.allSubmissions.push({
      userID: 1,
      valueRanking: saveData
    })
    this.type === 'current' ? localStorage.setItem('allCurrentSubmissions', JSON.stringify(this.allSubmissions)) :
      localStorage.setItem('allTargetSubmissions', JSON.stringify(this.allSubmissions));

    this._toastr.success('Value Saved Successfully')
    this._router.navigateByUrl(this.type === 'current' ? '/target-culture' : '/operational-diagnosis') 
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.transferToOther(event);
    }
    this.checkMostLeast();
  }

  transferToOther(event: any) {
    let collection: any;
    if (event.container.id === "leastLikelyB" || event.container.id === "leastLikelyA") {
      collection = this.leastLikelyA.length
    }
    if (event.container.id === "mostLikelyB" || event.container.id === "mostLikelyA") {
      collection = this.mostLikelyA.length;
    }
    if (event.container.id === "allValuesA" || event.container.id === "allValuesB") {
      collection = 0;
    }

    collection < 10 ? transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    ) : '';
  }

  addValue(item: any, shiftType: string, index: number) {
    shiftType === 'most' && this.mostLikelyA.length < 3 && (this.mostLikelyA.push(item)) && this.allValuesA.splice(index, 1);
    shiftType === 'least' && this.leastLikelyA.length < 3 && (this.leastLikelyA.push(item)) && this.allValuesA.splice(index, 1);
    this.checkMostLeast();

  }
  remove(item: any, shiftType: string, index: number) {
    shiftType === 'most' && (this.allValuesA.push(item)) && this.mostLikelyA.splice(index, 1);
    shiftType === 'least' && (this.allValuesA.push(item)) && this.leastLikelyA.splice(index, 1);
    this.checkMostLeast();

  }

  checkMostLeast() {
    (this.leastLikelyA.length === 3) && (this.mostLikelyA.length === 3) && (this.mostLeastDone = true)
  }






}
