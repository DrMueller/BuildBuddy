import { VssBuildStatus, VssBuildReason } from '.';

export class VssBuild {
  public requestForUserIdentifier: string = undefined;
  public status: VssBuildStatus = undefined;
  public reason: VssBuildReason = undefined;
  public finishTime: Date = undefined;
  public sourcBranch: string = undefined;
}
