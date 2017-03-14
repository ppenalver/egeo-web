
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared';
import { GridComponent } from './grid.component';
import { routing } from './grid.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule],
   declarations: [GridComponent]
})
export class GridModule { }

