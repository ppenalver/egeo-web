import { Component, Input } from '@angular/core';

import { MENU, EgeoMenu } from '../layout.model';

@Component({
   selector: 'layout-menu',
   templateUrl: 'menu.component.html'
})

export class LayoutMenuComponent {
   @Input() menuList: EgeoMenu;
   @Input() childOfMain: boolean = false;

   constructor() { }
}
