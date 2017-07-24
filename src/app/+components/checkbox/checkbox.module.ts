
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { CheckboxComponent } from './checkbox.component';
import { routing } from './checkbox.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [CheckboxComponent]
})
export class CheckboxModule { }

