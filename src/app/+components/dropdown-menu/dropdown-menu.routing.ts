
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DropdownMenuComponent } from './dropdown-menu.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: DropdownMenuComponent }
]);
