
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Vertical-tabsComponent } from './vertical-tabs.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Vertical-tabsComponent }
]);
