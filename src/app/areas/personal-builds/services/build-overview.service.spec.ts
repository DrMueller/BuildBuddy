import { TestBed, inject } from '@angular/core/testing';

import { BuildOverviewService } from './build-overview.service';

describe('BuildOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildOverviewService]
    });
  });

  it('should ...', inject([BuildOverviewService], (service: BuildOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
