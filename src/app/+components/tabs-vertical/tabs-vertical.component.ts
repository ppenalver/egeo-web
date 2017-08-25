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

import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'tabs-vertical-example',
   templateUrl: './tabs-vertical.component.html',
   styleUrls: ['tabs-vertical.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class TabsVerticalComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Vertical tabs',
      description: 'The vertical tabs component is used for navigation purposes. It shows a set of tabs stacked in a column which user can interacts with and the current tab is highlighted.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'activeOption', type: TYPES.STR, required: false, details: 'Current active option name' },
            { paramName: 'options', type: TYPES.ARRAY_STR, required: true, details: 'tabs option names, must be translated' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' }
         ],
         outputs: [
            { paramName: 'changedOption', type: 'any', required: true, details: 'This event is emitted when the active option has changed. It has the active option name as param' }
         ]
      },
      exampleDesc: `Next, you can see an example of vertical tabs with three options.`
   };
   // tslint:enable:max-line-length

   options: Array<string> = ['Service', 'Nodes', 'Cassandra'];
   active: string = this.options[0];
   qaTag: string = 'tabs-vertical-example';

   onChangeOption(active: string): void {
      this.active = active;
   }
}
