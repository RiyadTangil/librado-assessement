import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hapiness-factor',
  templateUrl: './hapiness-factor.component.html',
  styleUrls: ['./hapiness-factor.component.css']
})
export class HapinessFactorComponent implements OnInit {
  totalScore: number = 0; 
  isDone: boolean = false;

  allQuestions = [
    {
      question: 'How likely are you to recommend a friend or family member to join you in this organization?',
      status: 0
    },
    {
      question: 'Does my employer support my physical, mental and social well-being?',
      status: 0
    },
    {
      question: 'Does my employer management style encourage me in effective ways to communicate and manage conflicts?',
      status: 0
    },
    {
      question: 'Is my family wellbeing a priority for my employer?',
      status: 0
    },
  ]

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onInputChange(e: any, question: any) {
    question.status = e['value'];
    let sum = 0;
    this.allQuestions.forEach((item) => {
      sum = sum + item.status;
    })
    this.totalScore = sum / this.allQuestions.length;

    this.isDone = this.allQuestions.every((ques) => ques.status > 0)
  }

  submit() {
    localStorage.setItem('happinessScore', JSON.stringify(this.totalScore));
    this._router.navigateByUrl('/current-culture');
  }

  formatLabel(value: number) {
    let smiley = '';
    value >= 0 && value < 2 && (smiley = '😌');
    value >= 2 && value < 4 && (smiley = '😞');
    value >= 4 && value < 6 && (smiley = '😐');
    value >= 6 && value < 8 && (smiley = '🙂');
    value >= 8 && value <= 10 && (smiley = '😁');
    return smiley;
  }




}
