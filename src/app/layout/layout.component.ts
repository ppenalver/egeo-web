import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { EgeoResolveService } from '@stratio/egeo';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs';

import { MENU, EgeoMenu } from './layout.model';
import { VersionService } from './layout.service';

import * as parser from 'xml2json-light';

@Component({
   selector: 'layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.scss']
})

export class LayoutComponent {
   public mainMenu: Observable<EgeoMenu>;
   public version: string = 'undefined';
   public activeRoute: string = '';

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

   private parseVersion(xml: string): void {
      let result: any = parser.xml2json(xml);
      this.version = result.project.version;
   }

   private changeRoute(event: any): void {
      if (event instanceof NavigationEnd) {
         this.activeRoute = event.urlAfterRedirects;
      }
   }
}
