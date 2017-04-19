
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TableComponent }
]);
