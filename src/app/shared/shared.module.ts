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
import { TranslateModule } from '@ngx-translate/core';

import { EgeoModule } from '@stratio/egeo';
import { ApiDocComponent, ParametersTableComponent } from './api-doc';
import { LoadCodeComponent } from './load-code';
import { DemoCodeComponent } from './tab-demo-code/demo-code.component';
import { TitleComponent } from './title/title.component';
import { StickyDirective } from './sticky';

@NgModule({
   imports: [CommonModule, EgeoModule, TranslateModule],
   declarations: [
      LoadCodeComponent,
      ApiDocComponent,
      ParametersTableComponent,
      DemoCodeComponent,
      StickyDirective,
      TitleComponent
   ],
   exports: [
      CommonModule,
      LoadCodeComponent,
      ApiDocComponent,
      EgeoModule,
      StickyDirective,
      TranslateModule,
      TitleComponent
   ]
})
export class SharedModule {}
