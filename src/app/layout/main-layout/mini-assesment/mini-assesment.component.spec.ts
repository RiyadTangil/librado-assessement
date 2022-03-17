import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAssesmentComponent } from './mini-assesment.component';

describe('MiniAssesmentComponent', () => {
  let component: MiniAssesmentComponent;
  let fixture: ComponentFixture<MiniAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
