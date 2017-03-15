
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabBoxComponent } from './tab-box.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TabBoxComponent }
]);
