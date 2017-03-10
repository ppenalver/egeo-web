import { Http } from '@angular/http';
import { TranslateStaticLoader, TranslateLoader } from 'ng2-translate';


export function TranslateLoaderFunction(http: Http): TranslateStaticLoader {
   return new TranslateStaticLoader(http, 'assets/langs', '.json');
}

export const APP_LANGUAGE_PROVIDERS_OBJECT = {
   provide: TranslateLoader,
   useFactory: (TranslateLoaderFunction),
   deps: [Http]
};
