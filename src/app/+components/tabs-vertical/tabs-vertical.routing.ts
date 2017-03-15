
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsVerticalComponent } from './tabs-vertical.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TabsVerticalComponent }
]);
