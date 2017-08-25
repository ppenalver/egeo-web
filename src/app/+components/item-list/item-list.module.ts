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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StItemListModule } from '@stratio/egeo';

import { SharedModule } from '../../shared';
import { StItemListDocComponent } from './item-list.component';
import { routing } from './item-list.routing';

@NgModule({
   imports: [
      CommonModule,
      SharedModule,
      StItemListModule,
      routing
   ],
   declarations: [StItemListDocComponent]
})
export class StItemListDocModule { }
