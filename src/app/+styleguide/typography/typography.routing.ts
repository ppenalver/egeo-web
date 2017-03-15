
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TypographyComponent } from './typography.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TypographyComponent }
]);
