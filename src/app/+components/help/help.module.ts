import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { HelpComponent } from './help.component';
import { routing } from './help.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [HelpComponent]
})
export class HelpModule { }
