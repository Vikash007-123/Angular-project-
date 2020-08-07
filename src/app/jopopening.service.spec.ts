import { TestBed } from '@angular/core/testing';

import { JopopeningService } from './jopopening.service';

describe('JopopeningService', () => {
  let service: JopopeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JopopeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
