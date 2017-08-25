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

import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ApiDoc, TYPES } from '../../../shared';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['grid.component.scss']
})

export class GridComponent {
   public apiDoc: ApiDoc;

   public gridDemoUrl: SafeResourceUrl = '';

   constructor(private sanitizer: DomSanitizer) {
      this.gridDemoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${location.href.split('#')[0]}#/grid-demo`);
   }
}
