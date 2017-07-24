
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared';
import { TypographyComponent } from './typography.component';
import { routing } from './typography.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [TypographyComponent]
})
export class TypographyModule { }

