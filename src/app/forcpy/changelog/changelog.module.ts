
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { ChangelogComponent } from './changelog.component';
import { routing } from './changelog.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [ChangelogComponent]
})
export class ChangelogModule { }

