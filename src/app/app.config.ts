import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: Http): TranslateHttpLoader {
   return new TranslateHttpLoader(http, 'assets/langs/', '.json');
}

export const APP_LANGUAGE_PROVIDERS_OBJECT = {
   loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
   }
};
