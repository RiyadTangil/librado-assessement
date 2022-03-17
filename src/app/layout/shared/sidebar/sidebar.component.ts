import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  navigationPaths: Array<any> = [
    {
      title: 'Welcome',
      path: '/home',
      icon: 'bi-house-fill'
    },
    {
      title: 'Getting Started',
      path: '/assesment',
      icon: 'bi-file-earmark-post'
    },
    {
      title: 'Happiness Factor',
      path: '/happiness-factor',
      icon: 'bi-file-earmark-post'
    },
    {
      title: 'Prioritizing Current Culture',
      path: '/current-culture',
      icon: 'bi-file-earmark-post'
    },
    {
      title: 'Prioritizing Target Culture',
      path: '/target-culture',
      icon: 'bi-file-earmark-post'
    },

    {
      title: 'Operational Diagnostics',
      path: '/operational-diagnosis',
      icon: 'bi-file-earmark-post'
    },
    {
      title: 'INsight Reporting',
      path: '/report',
      icon: 'bi-bar-chart-line-fill'
    },
    // {
    //   title: 'Monthly Plan',
    //   path: '/monthly_plan',
    //   icon: 'bi-calendar-week-fill'
    // },
  ]

  ngOnInit(): void {
  }
}
