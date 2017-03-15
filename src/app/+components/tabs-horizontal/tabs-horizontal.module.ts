
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { TabsHorizontalComponent } from './tabs-horizontal.component';
import { routing } from './tabs-horizontal.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TabsHorizontalComponent]
})
export class TabsHorizontalModule { }

