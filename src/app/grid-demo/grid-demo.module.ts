import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { GridDemoComponent } from './grid-demo.component';
import { routing } from './grid-demo.routing';
import { SharedModule } from '../shared';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [GridDemoComponent]
})
export class GridDemoModule { }

