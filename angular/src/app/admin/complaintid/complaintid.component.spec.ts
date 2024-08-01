import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintidComponent } from './complaintid.component';

describe('ComplaintidComponent', () => {
  let component: ComplaintidComponent;
  let fixture: ComponentFixture<ComplaintidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
