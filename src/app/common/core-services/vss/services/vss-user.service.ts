import { Injectable } from '@angular/core';

import { JsObjFactory } from 'app/common/utilities';

import { VssUser } from '../models';
import { VssNativeHandler } from '../infrastructure';


import * as $ from 'jquery';

@Injectable()
export class VssUserService {

  public testJquery(): void {
    const emptyObj = {};
    const test = $.isEmptyObject(emptyObj);
  }

  constructor() { }

  public getCurrentUser(): VssUser {
    const webContext = VssNativeHandler.getWebContext();
    const nativeUser = webContext.user;

    const result = JsObjFactory.create<VssUser>(nativeUser, VssUser);

    const test = $.isEmptyObject(result);
    return result;
  }
}
