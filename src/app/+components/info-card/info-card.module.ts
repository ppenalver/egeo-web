
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { InfoCardComponent } from './info-card.component';
import { routing } from './info-card.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [InfoCardComponent]
})
export class InfoCardModule { }

