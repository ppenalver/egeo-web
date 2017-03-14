import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: 'logo', component: LogoComponent }
]);
