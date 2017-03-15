
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RadioMenuComponent } from './radio-menu.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: RadioMenuComponent }
]);
