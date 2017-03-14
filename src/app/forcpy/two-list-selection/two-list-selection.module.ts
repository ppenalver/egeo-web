
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Two-list-selectionComponent } from './two-list-selection.component';
import { routing } from './two-list-selection.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Two-list-selectionComponent]
})
export class Two-list-selectionModule { }

