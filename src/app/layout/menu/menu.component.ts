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

import { Component, Input } from '@angular/core';

import { MENU, EgeoMenu } from '../layout.model';

@Component({
   selector: 'app-layout-menu',
   templateUrl: 'menu.component.html',
   styleUrls: ['menu.component.scss']
})

export class LayoutMenuComponent {
   @Input() menuList: EgeoMenu;
   @Input() childOfMain: boolean = false;
   @Input() activeRoute: string;

   constructor() { }
}
