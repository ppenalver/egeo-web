import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StartComponent } from './start.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: StartComponent }
]);
