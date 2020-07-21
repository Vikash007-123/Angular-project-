import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcandidatebyadminComponent } from './searchcandidatebyadmin.component';

describe('SearchcandidatebyadminComponent', () => {
  let component: SearchcandidatebyadminComponent;
  let fixture: ComponentFixture<SearchcandidatebyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcandidatebyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcandidatebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
