import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentNotificationComponent } from './assesment-notification.component';

describe('AssesmentNotificationComponent', () => {
  let component: AssesmentNotificationComponent;
  let fixture: ComponentFixture<AssesmentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
