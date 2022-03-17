import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalDiagnosisComponent } from './operational-diagnosis.component';

describe('OperationalDiagnosisComponent', () => {
  let component: OperationalDiagnosisComponent;
  let fixture: ComponentFixture<OperationalDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
