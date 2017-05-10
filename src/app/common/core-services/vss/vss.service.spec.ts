import { TestBed, inject } from '@angular/core/testing';

import { VssService } from './vss.service';

describe('VssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VssService]
    });
  });

  it('should ...', inject([VssService], (service: VssService) => {
    expect(service).toBeTruthy();
  }));
});
