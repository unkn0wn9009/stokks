import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


/*
API KEY: 636fdd65bad98ebd68cffab18427caff
API URL: http://api.marketstack.com/v1/
*/

/*
finnhub.io
API KEY: caumd5aad3ibefjvrto0
API KEY SANDBOX: sandbox_caumd5aad3ibefjvrtog
 */
