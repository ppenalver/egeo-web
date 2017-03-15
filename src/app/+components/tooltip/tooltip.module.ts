
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { TooltipComponent } from './tooltip.component';
import { routing } from './tooltip.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TooltipComponent]
})
export class TooltipModule { }

