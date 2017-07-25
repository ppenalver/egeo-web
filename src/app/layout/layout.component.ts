import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EgeoResolveService, StDropDownMenuItem } from '@stratio/egeo';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { MENU, EgeoMenu } from './layout.model';
import { VersionService } from './layout.service';

@Component({
   selector: 'app-layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.scss']
})
export class LayoutComponent {
   public mainMenu: Observable<EgeoMenu>;
   public version: string = 'undefined';
   public activeRoute: string = '';
   public itemsVersion: StDropDownMenuItem[] = [];

   public versions: string[] = [];

   @ViewChild('mainContent', { read: ViewContainerRef })
   target: ViewContainerRef;

   constructor(
      private egeoTranslate: EgeoResolveService,
      private translate: TranslateService,
      private serviceVersion: VersionService,
      private router: Router
   ) {
      this.mainMenu = this.egeoTranslate.translate(MENU, this.translate);
      this.serviceVersion.getPom().subscribe(xml => this.parseVersion(xml));
      this.serviceVersion.getVersions().subscribe((versionList: any) => {
         for (let i = 0; i < versionList.length; i++) {
            this.itemsVersion.push({
               label: versionList[i],
               value: versionList[i]
            });
         }
         this.versions = versionList;
      });
      router.events.subscribe(change => this.changeRoute(change));
   }

   onChangeVersion(version: StDropDownMenuItem): void {
      window.location.href = `http://egeo.stratio.com/${version.value}`;
   }

   private parseVersion(version: string): void {
      this.version = version;
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
