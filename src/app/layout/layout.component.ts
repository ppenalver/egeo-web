import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EgeoResolveService } from '@stratio/egeo';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs';

import { MENU, EgeoMenu } from './layout.model';
import { VersionService } from './layout.service';

@Component({
   selector: 'layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.scss']
})

export class LayoutComponent {
   public mainMenu: Observable<EgeoMenu>;
   public version: string = 'undefined';
   public activeRoute: string = '';

   @ViewChild('mainContent', { read: ViewContainerRef }) target: ViewContainerRef;

   constructor(
      private egeoTranslate: EgeoResolveService,
      private translate: TranslateService,
      private serviceVersion: VersionService,
      private router: Router
   ) {
      this.mainMenu = this.egeoTranslate.translate(MENU, this.translate);
      this.serviceVersion.getPom().subscribe(xml => this.parseVersion(xml));
      router.events.subscribe(change => this.changeRoute(change));
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
