import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { MENU, EgeoMenu } from '../layout.model';

@Component({
   selector: 'layout-menu-item',
   templateUrl: 'menu-item.component.html',
   styleUrls: ['menu-item.component.scss']
})

export class LayoutMenuItemComponent {
   @Input() menu: EgeoMenu;
   @Input() childOfMain: boolean = false;

   isOpen: boolean = false;

   @ViewChild('label', { read: ViewContainerRef }) label: ViewContainerRef;

   constructor() { }

   hasSubmenu(): boolean {
      return this.menu && this.menu.submenu && this.menu.submenu.length > 0;
   }

   getTypeClass(): string {
      if (this.menu.isMainMenu) {
         return 'main-item';
      } else {
         if (this.childOfMain) {
            return 'section-item';
         }
      }
      return 'menu-item';
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
}
