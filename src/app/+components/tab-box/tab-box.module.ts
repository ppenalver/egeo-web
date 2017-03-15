
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { TabBoxComponent } from './tab-box.component';
import { routing } from './tab-box.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TabBoxComponent]
})
export class TabBoxModule { }

