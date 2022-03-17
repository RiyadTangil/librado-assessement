import { GlobalDataService } from './../../../utils/data/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-plan',
  templateUrl: './month-plan.component.html',
  styleUrls: ['./month-plan.component.css']
})
export class MonthPlanComponent implements OnInit {

  orignalMonthData: any = [];

  monthData: Array<any> = [
    {
      month: 'JANUARY',
      title: 'Month 1: Take a Skills and Interests Inventory (important)',
      description: 'Begin a soul-searching process to determine which employee is right for you.',
      status: 'important'
    },
    {
      month: 'FEBUARAY',
      title: 'Month 2: Research and Evaluate Your Idea (critical)',
      description: 'Many people have great ideas, but their departments flounder in the organization because there really isnt an audience for the product or service they are promoting.',
      status: 'critical'
    },
    {
      month: 'MARCH',
      title: 'Month 3: Choose your role model Employees, at Location and the best organizational Structure for them. (urgent)',
      description: 'Your role model employee and the right organizational structure can make a big difference in how you manage your business, your department, your customer emergencies, and your management capacity.',
      status: 'urgent'
    },
    {
      month: 'APRIL',
      title: 'Month 4: Calculate the Employee Costs and Return on Employees (urgent)',
      description: 'Its critical to determine how much each employee cost you in relationship to your sales.  Create a checklist of employee and department expenditures. List Return on Training, Return on Recruiting, Return on Onboarding, Return on Retention, Return on equipment, return on future people needed to operate your business. Itemize startup costs for revenue per man hour, return by department against sales.  Calculate your monthly overhead for rent, supplies, utilities, health insurance, taxes, Internet access and other services.',
      status: 'urgent'
    },
    {
      month: 'MAY',
      title: 'Month 5: Write Your People Strategy (critical)',
      description: 'You gain an advantage by building your People Strategy on paper first. A People Strategy plans value goes beyond its ability to help secure employees for you. Its a working document that helps you prepare for opportunities as well as difficulties.',
      status: 'critical'
    },
    {
      month: 'JUNE',
      title: 'Month 6: Identify Sources of People Engagement (urgent)',
      description: 'Begin your search for current employees Awards, Honors & Prizes that are tie to the employee performance.',
      status: 'urgent'
    },
    {
      month: 'JULY',
      title: 'Month 7: Work with the Departments Priorities Maze (Critical)',
      description: 'Learn how to set up meetings and metrics around Urgent (weekly matters), Important (monthly issues), Critical (quarterly demands) and meaningful (annual goals)',
      status: 'Critical'
    },
    {
      month: 'AUGUST',
      title: 'Month 8: Develop Your internal Customer/Employee Service Plan (important)',
      description: 'A Customer/Employee Service Plan consists of the strategies and devices you use to communicate to your customers and employees.  A customer/employee service plan focuses on customer requirements and expectations and ways of filling those requirements. The two works in concert. Descriptions of your market and its segments, the competition and prospective customers, and your employee skill sets in relationship to the value-added solutions to customers should be in your customer/employee service plan.',
      status: 'important'
    },
    {
      month: 'SEPTEMBER',
      title: 'Month 9: Improve your Customers Process',
      description: 'You must create a profile for the end user or customer of your product or service',
      status: 'important'
    },
    {
      month: 'OCTOBER',
      title: 'Month 10: Create Your Support Team',
      description: "You'll need a team of reliable department leaders that can be accountable, that can nurture relationships, have a proactive approach to issues, and be a developer of employees.",
      status: 'important'
    },
    {
      month: 'NOVEMBER',
      title: 'Month 11: Proactive Leadership',
      description: "You must create a culture of proactive leadership at all levels.",
      status: 'meaningful'
    },
    {
      month: 'DECEMBER',
      title: 'Month 12: Business Continuity Plan',
      description: "You must focus on eight major financial considerations for your business continuity plan:  Cash Flow, Short-term liquidity, Burn rate, Runway, growth potential, inventory management, collections, and vendor billing.",
      status: 'important'
    }
  ]

  monthArr = ['JANUARY', 'FEBUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
  gapPercentage: any;
  gapStatus: string = '';

  constructor(private _globalData: GlobalDataService) { }

  ngOnInit(): void {
    this.orignalMonthData = this.monthData;
    this._globalData.checkGapPercentage.subscribe((res: any) => {
      console.log(res, 'perce');
      this.gapPercentage = res;
      this.calculateGapStatus();
    })
  }

  filterMonth(month: string) {
    month.length > 0 && (this.monthData = this.orignalMonthData.filter((item: any) => item.month == month));
    month.length == 0 && (this.monthData = this.orignalMonthData);
  }

  calculateGapStatus() {
    if (this.gapPercentage >= 75) this.gapStatus = 'urgent'
    if (this.gapPercentage >= 50 && this.gapPercentage < 75) this.gapStatus = 'critical'
    if (this.gapPercentage >= 25 && this.gapPercentage < 50) this.gapStatus = 'important'
    if (this.gapPercentage < 25) this.gapStatus = 'meaningful'
  }

  calculateStatus(status: string) {
    console.log(status)
    status.length > 0 && (this.monthData = this.orignalMonthData.filter((item: any) => item.status == status));
    status.length == 0 && (this.monthData = this.orignalMonthData);
  }





}
