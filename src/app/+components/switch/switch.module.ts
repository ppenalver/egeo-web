import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';
import { SwitchComponent } from './switch.component';
import { routing } from './switch.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, ReactiveFormsModule, FormsModule],
   declarations: [SwitchComponent]
})
export class SwitchModule { }
