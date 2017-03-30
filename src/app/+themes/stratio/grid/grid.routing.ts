
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: GridComponent }
]);
