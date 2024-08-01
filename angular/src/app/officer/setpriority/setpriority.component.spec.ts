import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpriorityComponent } from './setpriority.component';

describe('SetpriorityComponent', () => {
  let component: SetpriorityComponent;
  let fixture: ComponentFixture<SetpriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetpriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
