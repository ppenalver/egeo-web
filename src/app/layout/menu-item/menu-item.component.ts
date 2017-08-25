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

import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';


import { MENU, EgeoMenu } from '../layout.model';

@Component({
   selector: 'app-layout-menu-item',
   templateUrl: 'menu-item.component.html',
   styleUrls: ['menu-item.component.scss']
})

export class LayoutMenuItemComponent implements OnChanges, OnInit {
   @Input() menu: EgeoMenu;
   @Input() childOfMain: boolean = false;
   @Input() activeRoute: string;

   isOpen: boolean = false;

   ngOnInit(): void {
      if (this.activeRoute === this.menu.link) {
         this.isOpen = true;
      }

      if (!this.childOfMain && this.menu) {
         this.isOpen = true;
      }
   }

   ngOnChanges(changes: SimpleChanges): void {
      const routeParam: string = 'activeRoute';

      if (changes[routeParam]) {
         if (changes[routeParam].currentValue.includes(this.menu.link)) {
            this.isOpen = true;
         } else {
            if (this.childOfMain && this.menu) {
               this.isOpen = false;
            }
         }
      }
   }

   hasSubmenu(): boolean {
      return this.menu && this.menu.submenu && this.menu.submenu.length > 0;
   }

   getTypeClass(): string {
      const initialClass: string = this.isActive();
      let returnedClass: string = initialClass + ' menu-item';

      if (this.menu.isMainMenu) {
         returnedClass = returnedClass + ' first-level';
      } else {
         if (this.childOfMain) {
            returnedClass = returnedClass + ' second-level';
         } else {
            returnedClass = returnedClass + ' third-level';
         }
      }

      return returnedClass;
   }

   getIconClass(): string {
      if (this.childOfMain && this.hasSubmenu()) {
         return this.isOpen ? 'icon-arrow2_up' : 'icon-arrow2_down';
      } else {
         return '';
      }
   }

   changeOpen(event: MouseEvent): void {
      event.stopImmediatePropagation();
   }

   getOpen(routerActive: boolean): boolean {
      if (this.menu.link.indexOf(this.activeRoute) > -1) {
         this.isOpen = true;
      } else {
         this.isOpen = false;
      }

      return this.isOpen;
   }

   isActive(): string {
      if (this.activeRoute === this.menu.link) {
         return 'item-active';
      }

      return '';
   }
}
