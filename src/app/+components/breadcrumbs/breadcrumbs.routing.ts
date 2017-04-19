
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadCrumsComponent } from './breadcrumbs.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: BreadCrumsComponent }
]);
