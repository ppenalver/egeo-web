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
import { STALERT_SEVERITY, StAlertsService } from '@stratio/egeo';

import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'st-alerts-doc',
   templateUrl: './alerts.component.html'
})
export class StAlertsDocComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Alerts',
      description: 'Notifications are banners that display relevant information about processes that are running in background, without direct user interaction.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'showInConsole', type: TYPES.BOOL, required: false, details: 'If true, all notifications will be displayed in the console too. DEFAULT: false' },
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id value for qa test' }
         ],
         outputs: []
      },
      exampleDesc: ''
   };
   // tslint:enable:max-line-length

   constructor(private _alertService: StAlertsService) { }

   showWarning(): void {
      this._alertService.notifyAlert(
         'Warning',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.WARNING);
   }

   showError(): void {
      this._alertService.notifyAlert(
         'Error',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.ERROR,
         undefined, 10000);
   }

   showSuccess(): void {
      this._alertService.notifyAlert(
         'Success',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.SUCCESS);
   }
}
