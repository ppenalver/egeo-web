import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TipComponent } from './tip.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TipComponent }
]);
