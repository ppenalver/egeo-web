
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { DropdownComponent } from './dropdown.component';
import { routing } from './dropdown.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [DropdownComponent]
})
export class DropdownModule { }

