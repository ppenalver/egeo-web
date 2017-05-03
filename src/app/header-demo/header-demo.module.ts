import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FakePageComponent } from './fake-page.component';
import { HeaderDemoComponent } from './header-demo.component';
import { routing } from './header-demo.routing';
import { SharedModule } from '../shared';


@NgModule({
   imports: [SharedModule, routing],
   declarations: [FakePageComponent, HeaderDemoComponent]
})
export class HeaderDemoModule { }

