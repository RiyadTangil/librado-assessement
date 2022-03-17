import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapinessFactorComponent } from './hapiness-factor.component';

describe('HapinessFactorComponent', () => {
  let component: HapinessFactorComponent;
  let fixture: ComponentFixture<HapinessFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HapinessFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HapinessFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
