import { Component, Input } from '@angular/core';

import { IconModel } from '../icons.model';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['icon.component.scss']
})

export class IconComponent {

   @Input() icon: IconModel;

   getClass(): string {
      return `icon-${this.icon.name}`;
   }

   getCode(): string {
      // let value: number = +(this.icon.key.match(/\d+/g) || [''])[0];
      return String.fromCharCode(+this.icon.key.substr(2));
   }
}
