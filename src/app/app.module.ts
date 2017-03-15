import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';
import { APP_LANGUAGE_PROVIDERS_OBJECT } from './app.config';

/* Other modules Imports */
import { LayoutComponent } from './layout/layout.component';
import { LayoutMenuItemComponent } from './layout/menu-item/menu-item.component';
import { LayoutMenuComponent } from './layout/menu/menu.component';
import { Error404Component } from './errors/error.404.component';
import { routing } from './app.routing';
import { SharedModule } from 'shared';
import { VersionService } from './layout/layout.service';

/* External libs */
import { TranslateModule, TranslateService } from 'ng2-translate';
import { EgeoModule } from 'egeo';

// Hot Loader
import { AppStore, State } from './app.store';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

// RxJS
import 'rxjs';

// Libs
import 'lodash';

@NgModule({
   imports: [
      BrowserModule,
      HttpModule,
      EgeoModule.forRoot(),
      routing,
      TranslateModule.forRoot(APP_LANGUAGE_PROVIDERS_OBJECT),
      SharedModule
   ],
   declarations: [
      AppComponent,
      LayoutComponent,
      LayoutMenuComponent,
      LayoutMenuItemComponent,
      Error404Component
   ],
   providers: [AppStore, VersionService],
   bootstrap: [AppComponent]
})
export class AppModule {
   constructor(public appRef: ApplicationRef, public appStore: AppStore) { }
   hmrOnInit(store: any): void {
      if (!store || !store.state) {
         return;
      }
      console.log('HMR store', JSON.stringify(store, undefined, 2));
      // restore state
      this.appStore.setState(store.state);
      // restore input values
      if ('restoreInputValues' in store) {
         store.restoreInputValues();
      }
      this.appRef.tick();
      Object.keys(store).forEach(prop => delete store[prop]);
   }
   hmrOnDestroy(store: any): void {
      const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
      const currentState = this.appStore.getState();
      store.state = currentState;
      // recreate elements
      store.disposeOldHosts = createNewHosts(cmpLocation);
      // save input values
      store.restoreInputValues = createInputTransfer();
      // remove styles
      removeNgStyles();
   }
   hmrAfterDestroy(store: any): void {
      // display new elements
      store.disposeOldHosts();
      delete store.disposeOldHosts;
   }
 }


