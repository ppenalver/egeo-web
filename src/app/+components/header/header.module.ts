
import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { HeaderComponent } from './header.component';
import { routing } from './header.routing';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [HeaderComponent]
})
export class HeaderModule { }

