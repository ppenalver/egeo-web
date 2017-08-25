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

import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderDemoComponent } from './header-demo.component';
import { FakePageComponent } from './fake-page.component';
import { LONG_CONTENT } from './header-demo.model';

export const routing: ModuleWithProviders = RouterModule.forChild([
   {
      path: 'header', component: HeaderDemoComponent, children: [
         { path: 'test1', redirectTo: 'test1/subtest1', pathMatch: 'full' },
         {
            path: 'test1', component: FakePageComponent, data: { pageName: 'TEST 1' }, children: [
               { path: 'subtest1', component: FakePageComponent, data: { pageName: 'SUBTEST 1' } },
               { path: 'subtest2', component: FakePageComponent, data: { pageName: 'SUBTEST 2' } }
            ]
         },
         { path: 'test2', component: FakePageComponent, data: { pageName: 'TEST 2' } },
         { path: 'test3', component: FakePageComponent, data: { pageName: 'TEST 3' } },
         { path: 'test4', component: FakePageComponent, data: { pageName: LONG_CONTENT } },
         { path: 'test5', component: FakePageComponent, data: { pageName: 'TEST 5' } }
      ]
   }
]);
