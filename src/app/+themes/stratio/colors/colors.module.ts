
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared';
import { ColorsComponent } from './colors.component';
import { routing } from './colors.routing';


@NgModule({
   imports: [routing, SharedModule],
   declarations: [ColorsComponent]
})
export class ColorsModule { }

