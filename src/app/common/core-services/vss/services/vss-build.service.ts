import { Injectable } from '@angular/core';

import { Action } from 'app/common/types/callbacks';

import { VssBuild } from '../models';
import { VssUserService } from '../services/vss-user.service';
import { VssNativeHandler } from '../infrastructure';

// import * as tra from 'TFS/Build/RestClient';
// import * as tra2 from 'VSS/VSS';


@Injectable()
export class VssBuildService {
  private readonly WEBPORTAL_BUILD_ID = 7;
  private readonly RESTCLIENT_URL = 'TFS/Build/RestClient';
  private readonly PROJECT_NAME = 'ARGUSNET';

  constructor(private vssUserService: VssUserService) { }

  public getLastBuildsForCurrentUser(maxItems: number, callback: Action<VssBuild[]>) {
    const currentUserIdentifier = this.vssUserService.getCurrentUser().uniqueName;

    this.requireClient((cp: any) => {
      const client = cp.getClient();

      const nativeBuilds = client.getBuilds(this.PROJECT_NAME,
        null, null, null, null, null,
        currentUserIdentifier,
        null, null, null, null, null,
        null, null, null, null, 3);

      const buildsQuery = nativeBuilds.then(builds => {
        const maps = builds.map(b => {
          const build = new VssBuild();
          build.requestForUserIdentifier = b.requestedFor.uniqueName;
          build.status = b.status;
          build.reason = b.reason;
          build.finishTime = b.finishTime;
          build.sourcBranch = b.sourceBranch;

          return build;
        });

        callback(maps);
      });


    });

  };

  private requireClient(action: Action<any>): void {
    const vss = VssNativeHandler.getVss();

    vss.require([this.RESTCLIENT_URL], clientProvider => {
      debugger;
      action(clientProvider);
    });
  }
}
