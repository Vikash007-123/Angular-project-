import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewscheduledAdminComponent } from './interviewscheduled-admin.component';

describe('InterviewscheduledAdminComponent', () => {
  let component: InterviewscheduledAdminComponent;
  let fixture: ComponentFixture<InterviewscheduledAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewscheduledAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewscheduledAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
