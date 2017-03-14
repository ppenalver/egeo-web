
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: NavigationComponent }
]);
