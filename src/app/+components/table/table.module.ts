
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { TableComponent } from './table.component';
import { routing } from './table.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TableComponent]
})
export class TableModule { }

