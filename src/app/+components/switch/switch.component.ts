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
import { ApiDoc, TYPES } from '../../shared';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
   selector: 'switch-example',
   templateUrl: './switch.component.html',
   styleUrls: ['switch.component.scss']
})

export class SwitchComponent {

   public loading: boolean;
   public model = false;
   public form: FormGroup;
   public disabled: boolean;
   public apiDoc: ApiDoc;

   constructor() {
      this.loading = true;
      this.apiDoc = <ApiDoc> {
         title: 'Switch',
         description: 'Component designed to enable or disable whatever you need. Switch component can be used in a ' +
         'form or in any part of your web.',
         haveModel: false,
         apiSection: {
            inputs: [
               {
                  paramName: 'stModel',
                  type: TYPES.BOOL,
                  required: true,
                  details: 'This boolean changes when the user interacts with switch'
               },
               { paramName: 'qaTag',
                  type: TYPES.STR,
                  required: false,
                  details: 'Id value for qa test.' },
               {
                  paramName: 'label',
                  type: TYPES.STR,
                  required: false,
                  details: 'Label displayed next to the switch'
               },
               {
                  paramName: 'name',
                  type: TYPES.STR,
                  required: false,
                  details: 'Text to identify the switch'
               },
               {
                  paramName: 'labelPosition',
                  type: TYPES.STR,
                  required: false,
                  details: 'This string indicates the label position. It can be left, right or top. By default, label is positioned at top'
               },
               {
                  paramName: 'contextualHelp',
                  type: TYPES.STR,
                  required: false,
                  details: 'Tooltip displayed when the user clicks on the help button'
               },
               {
                  paramName: 'disabled',
                  type: TYPES.BOOL,
                  required: false,
                  details: 'This boolean indicates if the switch is disabled or not'
               }
            ],
            outputs: [
               {
                  paramName: 'change',
                  type: TYPES.BOOL,
                  details: 'Boolean emitted when the user interacts with the switch'
               }
            ]
         },
         exampleDesc: `Next, you can see how to work a switch with different variations`
      };

      this.form = new FormGroup({
         switch: new FormControl({ value: this.model, disabled: false }, Validators.required)
      });
   }

}
