import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start.component';
import { routing } from './start.routing';


@NgModule({
   imports: [CommonModule, routing],
   declarations: [StartComponent]
})
export class StartModule { }
