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
import { ApiDoc } from './shared/api-doc.model';

@Component({
  selector: 'st-api-doc',
  templateUrl: 'api-doc.component.html',
  styleUrls: ['api-doc.component.scss']
})
export class ApiDocComponent {
   @Input() doc: ApiDoc;

   hasParameters(): boolean {
      return (this.doc.apiSection.inputs && this.doc.apiSection.inputs.length > 0) ||
      (this.doc.apiSection.outputs && this.doc.apiSection.outputs.length > 0) ||
      (this.doc.apiSection.description && this.doc.apiSection.description.trim().length > 0);
   }
}
