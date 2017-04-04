
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { ModalComponent } from './modal.component';
import { routing } from './modal.routing';

@NgModule({
   imports: [
      CommonModule,
      routing,
      SharedModule
   ],
   declarations: [ModalComponent]
})
export class ModalModule { }

