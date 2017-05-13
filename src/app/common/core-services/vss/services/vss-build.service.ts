import { Injectable } from '@angular/core';

import { Action } from 'app/common/types/callbacks';

import { VssBuild } from '../models';
import { VssUserService } from '../services/vss-user.service';
import { VssNativeHandler } from '../infrastructure';

@Injectable()
export class VssBuildService {
  private readonly WEBPORTAL_BUILD_ID = 7;
  private readonly RESTCLIENT_URL = 'TFS/Build/RestClient';
  private readonly PROJECT_NAME = 'ARGUSNET';

  constructor(private vssUserService: VssUserService) { }

  public getLastBuildsForCurrentUser(maxItems: number): Promise<VssBuild[]> {
    return this.requireClient().then((cp: any) => {
      const client = cp.getClient();
      return this.getBuilds(client)
        .then(f => f.slice(0, maxItems));
    });
  };

  private getBuilds(client: any): Promise<VssBuild[]> {
    return this.getNativeBuilds(client).then((val: any[]) => {
      const maps = val.map(this.createBuild);
      return maps;
    });
  }

  private createBuild(nativeBuild: any): VssBuild {
    const build = new VssBuild();
    build.requestForUserIdentifier = nativeBuild.requestedFor.uniqueName;
    build.status = nativeBuild.status;
    build.triggerReason = nativeBuild.reason;
    build.finishTime = nativeBuild.finishTime;
    build.sourcBranch = nativeBuild.sourceBranch;
    build.id = nativeBuild.id;
    build.projectName = nativeBuild.definition.project.name;
    return build;
  }

  private getNativeBuilds(client: any): Promise<any> {
    const currentUserIdentifier = this.vssUserService.getCurrentUser().uniqueName;

    return client.getBuilds(this.PROJECT_NAME,
      null, null, null, null, null,
      currentUserIdentifier,
      null, null, null, null, null,
      null, null, null, null, 3);
  }

  private requireClient(): Promise<any> {
    const vss = VssNativeHandler.getVss();

    const result = new Promise((resolve: any) => {
      vss.require([this.RESTCLIENT_URL], clientProvider => {
        resolve(clientProvider);
      });
    });

    return result;
  }

}
