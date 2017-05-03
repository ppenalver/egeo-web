import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EgeoModule } from '@stratio/egeo';
import { ApiDocComponent, ParametersTableComponent } from './api-doc';
import { LoadCodeComponent } from './load-code';
import { DemoCodeComponent } from './tab-demo-code/demo-code.component';

@NgModule({
   imports: [CommonModule, EgeoModule, TranslateModule],
   declarations: [
      LoadCodeComponent,
      ApiDocComponent,
      ParametersTableComponent,
      DemoCodeComponent
   ],
   exports: [CommonModule, LoadCodeComponent, ApiDocComponent, EgeoModule, TranslateModule]
})
export class SharedModule { }
