
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { RadioMenuComponent } from './radio-menu.component';
import { routing } from './radio-menu.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [RadioMenuComponent]
})
export class RadioMenuModule { }

