
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { InfoBoxComponent } from './info-box.component';
import { routing } from './info-box.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [InfoBoxComponent]
})
export class InfoBoxModule { }

