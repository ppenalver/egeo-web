
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Tab-boxComponent } from './tab-box.component';
import { routing } from './tab-box.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Tab-boxComponent]
})
export class Tab-boxModule { }

