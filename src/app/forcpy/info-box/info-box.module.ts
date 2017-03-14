
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Info-boxComponent } from './info-box.component';
import { routing } from './info-box.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Info-boxComponent]
})
export class Info-boxModule { }

