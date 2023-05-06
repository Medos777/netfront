import { TestBed } from '@angular/core/testing';

import { LoisirService } from './loisir.service';

describe('LoisirService', () => {
  let service: LoisirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoisirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
