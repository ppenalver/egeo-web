
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegexpComponent } from './regexp.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: RegexpComponent }
]);
