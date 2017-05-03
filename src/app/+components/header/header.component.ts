import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StHeaderModel, StHeaderUserMenuModel, EgeoResolveService } from '@stratio/egeo';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiDoc, TYPES } from 'shared';

@Component({
   selector: 'header-example',
   templateUrl: './header.component.html'
})
export class HeaderComponent {

   iframeSrc: any;

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Header',
      description: 'The header component is a main component of an application. This component must be on top and scroll with page, when scroll is in a calculated position, the header shrinks and fix to top.',
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'appName', type: TYPES.STR, required: false, details: 'Name of application to show, by default empty' },
            { paramName: 'companyName', type: TYPES.STR, required: false, details: 'Company name to show, by default: Stratio' },
            { paramName: 'menu', type: 'Array<StHeaderModel>', required: false, details: 'Array with menu option to show' },
            { paramName: 'userMenu', type: 'StHeaderUserMenuModel', required: false, details: 'Object with user menu information' },
            { paramName: 'maxWidth', type: TYPES.NUM, required: false, details: 'Define a max-width property in px for header' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test' }
         ],
         outputs: [
            { paramName: 'contentChangeOffset', type: TYPES.NUM, required: false, details: '' }
         ]
      },
      exampleDesc: `You can find the example at top of page`
   };
   // tslint:enable:max-line-length

   constructor(private sanitizer: DomSanitizer) {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`${location.href.split('#')[0]}#/header/test1`);
   }
}
