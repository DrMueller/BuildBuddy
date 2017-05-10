import { Injectable } from '@angular/core';

// import * as t from 'VSS/Service';
// import * as v from 'VSS/VSS';
// import * as tra from 'TFS/Build/RestClient';

@Injectable()
export class VssService {
  private readonly WEBPORTAL_BUILD_ID = 7;

  // FinishTimeAscending = 2,
  // FinishTimeDescending = 3,

  constructor() { }

  public test(): void {
    const vss = this.getVss();
    const context = vss.getWebContext();

    vss.require(['TFS/Build/RestClient'], function (restClient) {
      // const client: tra.BuildHttpClient3 = restClient.getClient();
      const client = restClient.getClient();

      debugger;
      client.getBuilds('ARGUSNET').then(builds => {
        builds.slice(0, 100).forEach(f => {
          console.debug(f.requestedFor);
          console.debug(f.quality);
          console.debug(f.status);

          console.debug(f.reason);

          if (f.validationResults) {
            f.validationResults.forEach(r => {
              console.debug(r.result);
              console.debug(r.message);
            });
          }
        });
      });
    });
  }

  private getVss(): any {
    const result = window['VSS'];
    return result;
  }
}
