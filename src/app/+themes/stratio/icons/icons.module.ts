
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { IconsComponent } from './icons.component';
import { IconComponent } from './icon/icon.component';
import { IconsService } from './icons.service';
import { routing } from './icons.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [IconsComponent, IconComponent],
   providers: [IconsService]
})
export class IconsModule { }

