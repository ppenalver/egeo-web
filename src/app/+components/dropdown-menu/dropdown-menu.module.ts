
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { routing } from './dropdown-menu.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [DropdownMenuComponent]
})
export class DropdownMenuModule { }

