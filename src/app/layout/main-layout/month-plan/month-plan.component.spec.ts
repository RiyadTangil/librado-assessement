import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPlanComponent } from './month-plan.component';

describe('MonthPlanComponent', () => {
  let component: MonthPlanComponent;
  let fixture: ComponentFixture<MonthPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
