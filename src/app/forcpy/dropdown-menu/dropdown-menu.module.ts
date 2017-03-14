
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { Dropdown-menuComponent } from './dropdown-menu.component';
import { routing } from './dropdown-menu.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [Dropdown-menuComponent]
})
export class Dropdown-menuModule { }

