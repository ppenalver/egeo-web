import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start.component';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './start.routing';

@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [StartComponent]
})
export class StartModule {}
