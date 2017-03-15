
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsHorizontalComponent } from './tabs-horizontal.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TabsHorizontalComponent }
]);
