import { Injectable } from '@angular/core';

import { JsObjFactory } from 'app/common/utilities';

import { VssUser } from '../models';
import { VssNativeHandler } from '../infrastructure';


@Injectable()
export class VssUserService {

  constructor() { }

  public getCurrentUser(): VssUser {
    const webContext = VssNativeHandler.getWebContext();
    const nativeUser = webContext.user;

    const result = JsObjFactory.create<VssUser>(nativeUser, VssUser);
    return result;
  }
}
