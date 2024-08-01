import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisecomplaintComponent } from './raisecomplaint.component';

describe('RaisecomplaintComponent', () => {
  let component: RaisecomplaintComponent;
  let fixture: ComponentFixture<RaisecomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisecomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
