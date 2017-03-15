
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TooltipComponent } from './tooltip.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TooltipComponent }
]);
