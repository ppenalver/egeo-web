
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page-titleComponent } from './page-title.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Page-titleComponent }
]);
