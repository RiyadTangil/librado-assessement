import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceleratorProgrammeComponent } from './accelerator-programme.component';

describe('AcceleratorProgrammeComponent', () => {
  let component: AcceleratorProgrammeComponent;
  let fixture: ComponentFixture<AcceleratorProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceleratorProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceleratorProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
