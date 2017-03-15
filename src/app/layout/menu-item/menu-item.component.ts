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
   }

   ngOnChanges(changes: SimpleChanges): void {
      let routeParam: string = 'activeRoute';
      if (changes[routeParam]) {
         if (changes[routeParam].currentValue === this.menu.link) {
            this.isOpen = true;
         }
      }
   }

   hasSubmenu(): boolean {
      return this.menu && this.menu.submenu && this.menu.submenu.length > 0;
   }

   getTypeClass(): string {
      let initialClass: string = this.isActive();
      if (this.menu.isMainMenu) {
         return initialClass + ' main-item';
      } else {
         if (this.childOfMain) {
            return initialClass + ' section-item';
         }
      }
      return initialClass + ' menu-item';
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
      this.isOpen = !this.isOpen;
   }

   getOpen(routerActive: boolean): boolean {
      this.isOpen = routerActive;
      return this.isOpen;
   }

   isActive(): string {
      if (this.activeRoute === this.menu.link) {
         return 'item-active';
      }
      return '';
   }
}
