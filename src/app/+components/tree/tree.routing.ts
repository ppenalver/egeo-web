import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StTreeDocComponent } from './tree.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: StTreeDocComponent }
]);
