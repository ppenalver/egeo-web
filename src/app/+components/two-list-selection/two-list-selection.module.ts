
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { TwoListSelectionComponent } from './two-list-selection.component';
import { routing } from './two-list-selection.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TwoListSelectionComponent]
})
export class TwoListSelectionModule { }

