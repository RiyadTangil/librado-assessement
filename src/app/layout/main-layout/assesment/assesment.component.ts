import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  constructor(private router:Router) { }

  currentTab = 'assment_notification';



  ngOnInit(): void {
  }


  sm(){
    this.router.navigate(['/assesment/sales_marketing'])
  }

}
