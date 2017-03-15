
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { HeaderComponent } from './header.component';
import { FakePageComponent } from './shared';
import { routing } from './header.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [HeaderComponent, FakePageComponent]
})
export class HeaderModule { }

