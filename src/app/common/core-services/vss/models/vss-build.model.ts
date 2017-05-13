import { VssBuildStatus, VssBuildTriggerReason } from '.';

export class VssBuild {
  public id: number = undefined;
  public requestForUserIdentifier: string = undefined;
  public status: VssBuildStatus = undefined;
  public triggerReason: VssBuildTriggerReason = undefined;
  public finishTime: Date = undefined;
  public sourcBranch: string = undefined;
  public projectName: string = undefined;

  public get triggerReasonDescription(): string {
    if (this.triggerReason) {
      return VssBuildTriggerReason[this.triggerReason];
    }

    return 'Undefined';
  }

  public get statusDescription(): string {
    if (this.status) {
      return VssBuildStatus[this.status];
    }

    return 'Undefined';
  }

  public get detailsUrl(): string {
    const result = `https://argusnet.visualstudio.com/${this.projectName}/_build/index?buildId=${this.id}`;
    return result;
  }
}
