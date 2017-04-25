import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SwitchComponent } from './switch.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: SwitchComponent }
]);
