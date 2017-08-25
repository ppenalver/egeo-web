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
