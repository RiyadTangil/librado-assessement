import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCultureComponent } from './target-culture.component';

describe('TargetCultureComponent', () => {
  let component: TargetCultureComponent;
  let fixture: ComponentFixture<TargetCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
