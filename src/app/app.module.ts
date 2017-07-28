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
import { HeaderComponent } from './layout/header/header.component';
import { Error404Component } from './errors/error.404.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';
import { LoadCodeService } from './shared/load-code';
import { VersionService } from './layout/layout.service';
import { ModalTestComponent } from './+components/modal/modal-test.component';
import { HeaderDemoModule } from './header-demo/header-demo.module';
import { GridDemoModule } from './grid-demo/grid-demo.module';
import { AutomaticDocService } from './shared/automatic-doc/automatic-doc.service';

/* External libs */
import { TranslateModule } from '@ngx-translate/core';
import { EgeoModule, StModalModule } from '@stratio/egeo';

@NgModule({
   imports: [
      BrowserModule,
      HttpModule,
      EgeoModule.forRoot(),
      AppRoutingModule,
      TranslateModule.forRoot(APP_LANGUAGE_PROVIDERS_OBJECT),
      StModalModule.withComponents([ModalTestComponent]),
      HeaderDemoModule,
      GridDemoModule,
      SharedModule
   ],
   declarations: [
      AppComponent,
      LayoutComponent,
      LayoutMenuComponent,
      LayoutMenuItemComponent,
      Error404Component,
      ModalTestComponent,
      HeaderComponent
   ],
   providers: [VersionService, LoadCodeService, AutomaticDocService],
   bootstrap: [AppComponent]
})
export class AppModule { }
