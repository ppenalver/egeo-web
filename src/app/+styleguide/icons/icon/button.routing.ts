import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ButtonComponent }
]);
