import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateresultdataComponent } from './candidateresultdata.component';

describe('CandidateresultdataComponent', () => {
  let component: CandidateresultdataComponent;
  let fixture: ComponentFixture<CandidateresultdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateresultdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateresultdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
