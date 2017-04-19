
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { routing } from './breadcrumbs.routing';
import { BreadCrumsComponent } from './breadcrumbs.component';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [BreadCrumsComponent]
})
export class BreadCrumbsModule { }

