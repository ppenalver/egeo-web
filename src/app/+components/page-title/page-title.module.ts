
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { PageTitleComponent } from './page-title.component';
import { routing } from './page-title.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [PageTitleComponent]
})
export class PageTitleModule { }

