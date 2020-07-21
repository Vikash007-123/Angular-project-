import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewscheduledComponent } from './interviewscheduled.component';

describe('InterviewscheduledComponent', () => {
  let component: InterviewscheduledComponent;
  let fixture: ComponentFixture<InterviewscheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewscheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewscheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
