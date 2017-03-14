
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dropdown-menuComponent } from './dropdown-menu.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Dropdown-menuComponent }
]);
