import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';


import { MENU, EgeoMenu } from '../layout.model';

@Component({
   selector: 'layout-menu-item',
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
      let routeParam: string = 'activeRoute';

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
      let initialClass: string = this.isActive();
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
      console.log(this.menu.link.includes(this.activeRoute));

      if (this.menu.link.includes(this.activeRoute)) {
         this.isOpen = true;
      } else {
         this.isOpen = false;
      }
      //this.isOpen = routerActive;

      return this.isOpen;
   }

   isActive(): string {
      if (this.activeRoute === this.menu.link) {
         return 'item-active';
      }

      return '';
   }
}
