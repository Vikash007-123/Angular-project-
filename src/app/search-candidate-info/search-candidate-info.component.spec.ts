import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidateInfoComponent } from './search-candidate-info.component';

describe('SearchCandidateInfoComponent', () => {
  let component: SearchCandidateInfoComponent;
  let fixture: ComponentFixture<SearchCandidateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCandidateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCandidateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
