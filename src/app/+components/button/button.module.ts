import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { ButtonComponent } from './button.component';
import { routing } from './button.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [ButtonComponent]
})
export class ButtonModule { }
