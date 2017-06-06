import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { routing } from './main.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [MainComponent]
})
export class MainModule {}
