import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCandidateInfoComponent } from './display-candidate-info.component';

describe('DisplayCandidateInfoComponent', () => {
  let component: DisplayCandidateInfoComponent;
  let fixture: ComponentFixture<DisplayCandidateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCandidateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCandidateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
