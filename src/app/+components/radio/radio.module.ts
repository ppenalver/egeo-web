
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { RadioComponent } from './radio.component';
import { routing } from './radio.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [RadioComponent]
})
export class RadioModule { }

