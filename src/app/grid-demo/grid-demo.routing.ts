import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridDemoComponent } from './grid-demo.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: 'grid-demo', component: GridDemoComponent }
]);
