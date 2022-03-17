import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/utils/data/global-data.service';

@Component({
  selector: 'app-accelerator-programme',
  templateUrl: './accelerator-programme.component.html',
  styleUrls: ['./accelerator-programme.component.css']
})
export class AcceleratorProgrammeComponent implements OnInit {

  allQuestions: Array<any> = [];
  current: number = 0;
  position: number = 0;

  quetionareDataSenior: Array<any> = [
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
      "question": "Employees can articulate the following key components of the company’s strategy accurately. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "All employees can answer quantitatively whether they had a good day or week. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "The company’s plans and performance are visible to everyone. (Important)",
      "option_info": "",
    },
  ]
  quetionareDataA: Array<any> = [
    {
      "question_type": "MCQ",
      "question": "What is the nature of your company structure?  (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "When was the last time that your company structure was revisited to incorporate new roles? (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "How is the company aligned?  (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "What is the reporting and working relationships? (Important) ",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "How are decisions made in the company?  (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "How is information shared across the company? (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Does the company structure support growth and scaling up of operations? (Meaningful)",
      "option_info": "",
    }
  ]
  quetionareDataB: Array<any> = [
    {
      "question_type": "MCQ",
      "question": "All key company policies and processes have been identified, understood, and recorded. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Business processes are built around the needs of the customer. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Steps have been taken to ensure that Standard Operating Procedures are instituted and updated in a periodic manner to achieve maximum efficiency. (Important) ",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Systems and Processes are well integrated for all core operations and support operations. (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "How are decisions made in the company?  (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "How is information shared across the company? (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Does the company structure support growth and scaling up of operations? (Meaningful)",
      "option_info": "",
    }
  ]
  quetionareDataC: Array<any> = [
    {
      "question_type": "MCQ",
      "question": "Company identifies its key third-party suppliers / vendors / service providers. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "There is an availability of service level agreements with each of the third-party providers. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Service Level agreements are revisited in a periodic manner and necessary revisions are made. (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "There are a minimum of three quotes obtained from the Purchases department before the appointment of a vendor. (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "There is a comprehensive third-party service provider evaluation conducted annually by the company. (Meaningful) ",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Management can at any point review the list of active, inactive, or blacklisted third-party providers. (Meaningful)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Favorable third-party providers are acknowledged and honored by the company. (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "What percentage of the core business do the main customers contribute?  (Important)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "What percentage of the customers are new? (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "Company understands its target customer demography and ro­le.  (Critical)",
      "option_info": "",
    },
    {
      "question_type": "MCQ",
      "question": "The company is absolutely clear about its customer needs.  (Urgent)",
      "option_info": "",
    },
  ]

  constructor(private _globalData: GlobalDataService) { }

  ngOnInit(): void {
    this._globalData.checkAssmentTaker.subscribe((res: any) => {
      console.log(res);
      this.position = +res['position'] || 0;
      console.log(this.position);
      if (this.position == 1 || this.position == 2) {
        (this.allQuestions = this.quetionareDataSenior);
        (this.current = 1);
      }
      if (this.position == 3) {
        this.allQuestions = this.quetionareDataB
        this.current = 2
      }

      console.log(this.allQuestions);
    })


  }

  submit() {
    console.log('CURRENT', this.current);

    if (this.current == 1) {
      this.allQuestions = this.quetionareDataA
    }
    if (this.current == 2) {
      this.allQuestions = this.quetionareDataB
    }
    if (this.current == 3) {
      this.allQuestions = this.quetionareDataC
    }
    this.current++

    let targetCost = this.allQuestions.length * 4;
    let currentCost: number = 0;
    this.allQuestions.forEach((data) => {
      currentCost = currentCost + data.selected;
    })



  }

}
