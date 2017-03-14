
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { SearchComponent } from './search.component';
import { routing } from './search.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [SearchComponent]
})
export class SearchModule { }

