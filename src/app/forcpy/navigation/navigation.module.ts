
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { NavigationComponent } from './navigation.component';
import { routing } from './navigation.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [NavigationComponent]
})
export class NavigationModule { }

