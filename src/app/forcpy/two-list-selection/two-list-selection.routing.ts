
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Two-list-selectionComponent } from './two-list-selection.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Two-list-selectionComponent }
]);
