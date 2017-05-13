import { Injectable } from '@angular/core';

import { VssBuildService, VssBuild } from 'app/common/core-services/vss';

@Injectable()
export class BuildOverviewService {

  constructor(private vssBuildService: VssBuildService) { }

  public getOverview(): Promise<VssBuild[]> {
    return this.vssBuildService.getLastBuildsForCurrentUser(10);
  }
}
