import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { routing } from './branding.routing';


@NgModule({
   imports: [CommonModule, routing],
   declarations: [LogoComponent]
})
export class BrandingModule { }
