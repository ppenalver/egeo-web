import { Component } from '@angular/core';

import { IconsService } from './icons.service';
import { IconModel } from './icons.model';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['icons.component.scss']
})

export class IconsComponent {

   public iconList: IconModel[] = [];

   constructor(private service: IconsService) {
      service.getIconList().subscribe(this.iconListResponse.bind(this));
   }

   private iconListResponse(icons: IconModel[]): void {
      this.iconList = icons;
   }

}
