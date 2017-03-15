
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { FooterComponent } from './footer.component';
import { routing } from './footer.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [FooterComponent]
})
export class FooterModule { }

