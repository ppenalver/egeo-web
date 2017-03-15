import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from 'shared';
import { InputComponent } from './input.component';
import { routing } from './input.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, ReactiveFormsModule, FormsModule],
   declarations: [InputComponent]
})
export class InputModule { }
