
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { PaginationComponent } from './pagination.component';
import { routing } from './pagination.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [PaginationComponent]
})
export class PaginationModule { }

