import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCultureComponent } from './current-culture.component';

describe('CurrentCultureComponent', () => {
  let component: CurrentCultureComponent;
  let fixture: ComponentFixture<CurrentCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
