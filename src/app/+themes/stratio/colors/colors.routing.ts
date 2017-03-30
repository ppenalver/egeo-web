
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ColorsComponent }
]);
