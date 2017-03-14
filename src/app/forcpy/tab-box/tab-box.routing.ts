
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Tab-boxComponent } from './tab-box.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Tab-boxComponent }
]);
