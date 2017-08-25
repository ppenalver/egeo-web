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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   StDemoGeneratorModule,
   StButtonModule,
   StAlertsModule,
   StAlertsService
} from '@stratio/egeo';

import { StAlertsDocComponent } from './alerts.component';
import { SharedModule } from '../../shared';
import { routing } from './alerts.routing';


@NgModule({
   imports: [
      CommonModule,
      StAlertsModule,
      StButtonModule,
      SharedModule,
      routing
   ],
   declarations: [StAlertsDocComponent],
   providers: [StAlertsService]
})
export class StAlertsDocModule { }

