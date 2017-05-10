import { Inject } from '@angular/core';

import { IHtttpService, HttpBaseService } from '.';
import { Area } from '../../types/enums';
import { OpaqueTokenConstants } from './infrastructure';

export class HttpServiceResolverService {
  constructor( @Inject(OpaqueTokenConstants.HTTP_SERVICE_TOKEN) private httpServices: HttpBaseService[]) {
  }

  public resolveOffersArea(): IHtttpService {
    return this.resolve(Area.Offers);
  }

  public resolve(area: Area): IHtttpService {
    const service = this.httpServices.find(f => f.area === area);
    return service;
  }
}
