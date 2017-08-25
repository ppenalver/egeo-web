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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ChangelogService } from './changelog.service';

@Component({
  selector: 'changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})

export class ChangelogComponent implements OnInit, OnDestroy {

   public changelog: string = '';

   private sub: Subscription;

   constructor(private service: ChangelogService) { }

   ngOnInit(): void {
      this.service.getChangelog().subscribe(response => this.changelog = response);
   }

   ngOnDestroy(): void {
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

}
