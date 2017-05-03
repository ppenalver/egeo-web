import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: HeaderComponent }
]);
