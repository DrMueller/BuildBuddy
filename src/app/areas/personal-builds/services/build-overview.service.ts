import { Injectable } from '@angular/core';

import { VssBuildService, VssBuild } from 'app/common/core-services/vss';

@Injectable()
export class BuildOverviewService {

  constructor(private vssBuildService: VssBuildService) { }

  public getBuilds(): void {
    this.vssBuildService.getLastBuildsForCurrentUser(3).then((f: VssBuild[]) => {
      f.forEach(g => {
        console.debug(g.finishTime);
        console.debug(g.reason);
        console.debug(g.requestForUserIdentifier);
        console.debug(g.sourcBranch);
        console.debug(g.status);
      });
    });
  }
}
