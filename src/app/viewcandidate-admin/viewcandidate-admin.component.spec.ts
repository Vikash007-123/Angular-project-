import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcandidateAdminComponent } from './viewcandidate-admin.component';

describe('ViewcandidateAdminComponent', () => {
  let component: ViewcandidateAdminComponent;
  let fixture: ComponentFixture<ViewcandidateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcandidateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcandidateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
