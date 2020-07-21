import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrlComponent } from './data-url.component';

describe('DataUrlComponent', () => {
  let component: DataUrlComponent;
  let fixture: ComponentFixture<DataUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
