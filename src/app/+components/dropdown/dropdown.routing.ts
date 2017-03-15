
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './dropdown.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: DropdownComponent }
]);
