
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';
import { RegexpComponent } from './regexp.component';
import { routing } from './regexp.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, FormsModule, ReactiveFormsModule],
   declarations: [RegexpComponent]
})
export class RegexpModule { }

