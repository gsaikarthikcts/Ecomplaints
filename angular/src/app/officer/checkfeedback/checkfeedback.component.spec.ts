import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckfeedbackComponent } from './checkfeedback.component';

describe('CheckfeedbackComponent', () => {
  let component: CheckfeedbackComponent;
  let fixture: ComponentFixture<CheckfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
