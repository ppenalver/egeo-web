/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EgeoResolveService, StDropDownMenuItem } from '@stratio/egeo';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { cloneDeep as _cloneDeep } from 'lodash';

import { MENU, EgeoMenu } from './layout.model';
import { VersionService } from './layout.service';
import { AutomaticDocService } from '../shared/automatic-doc/automatic-doc.service';
import { Documentation } from '../shared/automatic-doc/automatic-doc.model';

@Component({
   selector: 'app-layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.scss']
})
export class LayoutComponent {
   public mainMenu: Observable<EgeoMenu>;
   public activeRoute: string = '';
   public versions: Observable<StDropDownMenuItem[]>;

   @ViewChild('mainContent', { read: ViewContainerRef })
   target: ViewContainerRef;

   constructor(
      private egeoTranslate: EgeoResolveService,
      private translate: TranslateService,
      private serviceVersion: VersionService,
      private router: Router,
      private _automaticServiceMenu: AutomaticDocService
   ) {
      this.mainMenu = this.egeoTranslate.translate(MENU, this.translate);
      this.mainMenu.zip(this._automaticServiceMenu.getDocumentationList(), (mainMenu, automaticMenu) => this.checkAutomatic(mainMenu, automaticMenu));
      this.versions = this.serviceVersion.getVersionList();
      router.events.subscribe(change => this.changeRoute(change));
   }

   onChangeVersion(version: StDropDownMenuItem): void {
      window.location.href = `http://egeo.stratio.com/${version.value}`;
   }

   private checkAutomatic(menu: EgeoMenu, automaticMenu: Documentation[]): EgeoMenu {
      const internalMenu: EgeoMenu = _cloneDeep(menu);
      // TODO: When we can load egeo-demo, we need to add new menu options for markdown founded.
      return internalMenu;
   }

   private changeRoute(event: any): void {
      if (event instanceof NavigationEnd) {
         this.activeRoute = event.urlAfterRedirects;
         this.scrollTop();
      }
   }

   private scrollTop(): void {
      this.target.element.nativeElement.scrollTop = 0;
   }
}
