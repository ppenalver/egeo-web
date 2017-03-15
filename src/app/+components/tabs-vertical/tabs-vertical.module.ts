
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { TabsVerticalComponent } from './tabs-vertical.component';
import { routing } from './tabs-vertical.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TabsVerticalComponent]
})
export class TabsVerticalModule { }

