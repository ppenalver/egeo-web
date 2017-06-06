
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CheckboxComponent } from './checkbox.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: CheckboxComponent }
]);
