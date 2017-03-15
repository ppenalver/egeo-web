import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpinnerComponent } from './spinner.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: SpinnerComponent }
]);
