
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { ColorsComponent } from './colors.component';
import { routing } from './colors.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [ColorsComponent]
})
export class ColorsModule { }

