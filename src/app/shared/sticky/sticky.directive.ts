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

import {
   Directive,
   ElementRef,
   HostListener,
   OnDestroy,
   AfterViewInit
} from '@angular/core';
import Sticky from 'sticky-js';

const uniqueSelector = 'sticky';

@Directive({ selector: '[sticky]' })
export class StickyDirective implements OnDestroy, AfterViewInit {
   private sticky: any;

   constructor(private el: ElementRef) {}

   ngOnDestroy(): void {
      if (this.sticky) {
         this.sticky.destroy();
      }
   }

   ngAfterViewInit(): void {
      const idUnique = 'sticky' + new Date().getUTCMilliseconds();
      this.el.nativeElement.id = idUnique;
      this.sticky = new Sticky('#' + idUnique);
   }
}
