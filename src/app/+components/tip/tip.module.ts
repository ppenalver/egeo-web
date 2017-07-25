import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { TipComponent } from './tip.component';
import { routing } from './tip.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TipComponent]
})
export class TipModule { }
