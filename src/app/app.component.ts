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

import { Component, ViewEncapsulation, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StModalService } from '@stratio/egeo';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

   @ViewChild('loadModal', { read: ViewContainerRef }) target: ViewContainerRef;

   constructor(translate: TranslateService, private _modalService: StModalService) {
      let userLang = navigator.language.split('-')[0];
      userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';

      translate.setDefaultLang('en');
      translate.use('en');
   }

   ngOnInit(): void {
      this._modalService.container = this.target;
   }
}
