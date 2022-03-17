import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  constructor() { }

  assmentInfo = {
    workLocation: null,
    department: null,
    position: null
  }

  // Report Data 
  private reportData = new BehaviorSubject<Object>(<Array<any>>[]);
  checkReportData = this.reportData.asObservable();
  // Gap Percentage 
  private gapPercentage = new BehaviorSubject<number>(0);
  checkGapPercentage = this.gapPercentage.asObservable();

  // Assment taker Information 
  private assmentTakerInfo = new BehaviorSubject<Object>(this.assmentInfo);
  checkAssmentTaker = this.assmentTakerInfo.asObservable();


  changeAssmentInfo(obj: any) {
    let currentInfo: any = this.assmentTakerInfo.getValue();
    this.reportData.next({
      ...currentInfo,
      ...obj
    });
  }







  addReport(products: any) {
    //--------------------
    let currentReport: any = this.reportData.getValue();
    currentReport.push(products);
    this.changeGapPercentage();
    this.reportData.next(currentReport);
  }
  changeGapPercentage() {
    let currentReport: any = this.reportData.getValue();
    let totalTarget: number = 0;
    let totalCurrent: number = 0;
    currentReport.forEach((item: any) => {
      totalTarget += item.target_score;
      totalCurrent += item.current_score;
    })
    let gapPercent = (totalCurrent * 100) / totalTarget;
    this.gapPercentage.next(100 - gapPercent);
  }
}
