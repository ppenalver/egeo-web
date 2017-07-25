import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { SpinnerComponent } from './spinner.component';
import { routing } from './spinner.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [SpinnerComponent]
})
export class SpinnerModule { }
