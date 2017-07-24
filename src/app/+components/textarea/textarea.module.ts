import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';
import { TextareaComponent } from './textarea.component';
import { routing } from './textarea.routing';


@NgModule({
   imports: [SharedModule, routing, ReactiveFormsModule, FormsModule],
   declarations: [TextareaComponent]
})
export class TextareaModule { }
