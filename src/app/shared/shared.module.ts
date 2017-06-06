import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EgeoModule } from '@stratio/egeo';
import { ApiDocComponent, ParametersTableComponent } from './api-doc';
import { LoadCodeComponent } from './load-code';
import { DemoCodeComponent } from './tab-demo-code/demo-code.component';
import { StickyDirective } from './sticky';

@NgModule({
   imports: [CommonModule, EgeoModule, TranslateModule],
   declarations: [
      LoadCodeComponent,
      ApiDocComponent,
      ParametersTableComponent,
      DemoCodeComponent,
      StickyDirective
   ],
   exports: [CommonModule, LoadCodeComponent, ApiDocComponent, EgeoModule, StickyDirective, TranslateModule]
})
export class SharedModule { }
