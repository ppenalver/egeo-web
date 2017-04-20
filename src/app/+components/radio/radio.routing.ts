
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RadioComponent } from './radio.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: RadioComponent }
]);
