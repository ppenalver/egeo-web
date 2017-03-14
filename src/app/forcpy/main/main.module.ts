
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { MainComponent } from './main.component';
import { routing } from './main.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [MainComponent]
})
export class MainModule { }

