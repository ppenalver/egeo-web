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

@Component({
   selector: 'checkbox-example',
   templateUrl: 'checkbox.component.html',
   styleUrls: ['checkbox.component.scss']
})

export class CheckboxComponent {

   public apiDoc: ApiDoc = {
      title: 'Checkbox',
      description: 'The checkbox component represents a custom input of the checkbox type',
      haveModel: false,
      // tslint:disable:max-line-length
      apiSection: {
         inputs: [
            {
               paramName: 'name', type: TYPES.STR, required: false, details: 'This parameter shows the final name of the input'
            },
            {
               paramName: 'disabled', type: TYPES.BOOL, required: false, details: 'Allows disabled the input component of the checkbox'
            },
            {
               paramName: 'required', type: TYPES.BOOL, required: false, details: 'Converts the component to a mandatory field in a form'
            },
            {
               paramName: 'readOnly', type: TYPES.BOOL, required: false, details: 'With this parameter enabled the input will be read-only and can not change its value'
            },
            {
               paramName: 'checked', type: TYPES.BOOL, required: false, details: 'Mark the input as a selected element'
            },
            {
               paramName: 'value', type: TYPES.ANY, required: false, details: 'Values of the input component'
            },
            {
               paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id value for qa test.'
            }
         ],
         outputs: [
            {
               paramName: 'change', type: TYPES.FUNC, required: false, details: 'Outputs the value of the input when it is clicked'
            }
         ]
      },
      exampleDesc: `You can see below several samples showing different the most common configurations of the checkbox component inside a application.`
   };
   // tslint:enable:max-line-length
}
