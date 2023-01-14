import { TestBed } from '@angular/core/testing';

import { MtgcardsService } from './mtgcards.service';

describe('MtgcardsService', () => {
  let service: MtgcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtgcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
