import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintSuccessModalComponent } from './complaint-success-modal.component';

describe('ComplaintSuccessModalComponent', () => {
  let component: ComplaintSuccessModalComponent;
  let fixture: ComponentFixture<ComplaintSuccessModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintSuccessModalComponent]
    });
    fixture = TestBed.createComponent(ComplaintSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
