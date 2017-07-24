import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { ToggleButtonsComponent } from './toggle-button.component';
import { routing } from './toggle-button.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [ToggleButtonsComponent]
})
export class ToggleButtonModule { }
