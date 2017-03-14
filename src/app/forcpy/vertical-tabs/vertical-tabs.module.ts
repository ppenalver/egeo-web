
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Vertical-tabsComponent } from './vertical-tabs.component';
import { routing } from './vertical-tabs.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Vertical-tabsComponent]
})
export class Vertical-tabsModule { }

