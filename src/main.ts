import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  const vss = window['VSS'];
  vss.init({
    usePlatformScripts: true,
    explicitNotifyLoaded: true,
    usePlatformStyles: true
  });

  vss.ready(function () {
    platformBrowserDynamic().bootstrapModule(AppModule);
    vss.notifyLoadSucceeded();
  });
});
