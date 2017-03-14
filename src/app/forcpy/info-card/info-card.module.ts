
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Info-cardComponent } from './info-card.component';
import { routing } from './info-card.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Info-cardComponent]
})
export class Info-cardModule { }

