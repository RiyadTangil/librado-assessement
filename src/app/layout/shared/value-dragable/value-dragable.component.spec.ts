import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDragableComponent } from './value-dragable.component';

describe('ValueDragableComponent', () => {
  let component: ValueDragableComponent;
  let fixture: ComponentFixture<ValueDragableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueDragableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueDragableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
