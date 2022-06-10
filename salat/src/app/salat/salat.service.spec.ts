import { TestBed } from '@angular/core/testing';

import { SalatService } from './salat.service';

describe('SalatService', () => {
  let service: SalatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
