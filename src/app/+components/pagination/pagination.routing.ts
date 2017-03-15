
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: PaginationComponent }
]);
