import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteStateComponent } from './complete-state.component';

describe('CompleteStateComponent', () => {
  let component: CompleteStateComponent;
  let fixture: ComponentFixture<CompleteStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteStateComponent]
    });
    fixture = TestBed.createComponent(CompleteStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
