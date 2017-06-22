import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from 'shared';
import { ComboboxComponent } from './combobox.component';
import { routing } from './combobox.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, ReactiveFormsModule, FormsModule],
   declarations: [ComboboxComponent]
})
export class ComboboxModule { }

