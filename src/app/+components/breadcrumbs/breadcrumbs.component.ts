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

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { StHorizontalTab } from '@stratio/egeo';

import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'breadcrumbs-example',
   templateUrl: './breadcrumbs.component.html',
   styleUrls: ['./breadcrumbs.component.css']
})

export class BreadCrumsComponent implements OnInit {
   options: Array<String>;
   qaTag: string = 'breadcrumbs-example';
   options2: Array<String>;
   qaTag2: string = 'breadcrumbs-example-2';

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'BreadCrumbs',
      description: 'This is a kind of navigation component. This is used to help the user to go back in a navigation by steps.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'options', type: TYPES.STR, required: true, details: 'An array of String that defines the displayed links' }
         ],
         outputs: [
            { paramName: 'select', type: 'string', required: true, details: 'This event is emitted when active option has changed. It has the active option index as param' }
         ]
      },
      exampleDesc: `Next, you can see two examples of breadcrumbs`
   };
   // tslint:enable:max-line-length

   ngOnInit(): void {
      this.options = ['step1', 'step2', 'step3', 'step4' , 'step5', 'step6'];
      this.options2 = this.options.concat(['step7', 'step8', 'step9' ]);
   }
}
