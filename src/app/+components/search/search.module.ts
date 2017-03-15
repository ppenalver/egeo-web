import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'shared';
import { SearchComponent } from './search.component';
import { routing } from './search.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, FormsModule, ReactiveFormsModule],
   declarations: [SearchComponent]
})
export class SearchModule { }

