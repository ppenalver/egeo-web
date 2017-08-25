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
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { SharedModule } from '../../shared';
import { ChangelogComponent } from './changelog.component';
import { ChangelogService } from './changelog.service';
import { routing } from './changelog.routing';


@NgModule({
   imports: [routing, SharedModule, MarkdownToHtmlModule],
   declarations: [ChangelogComponent],
   providers: [ChangelogService]
})
export class ChangelogModule { }

