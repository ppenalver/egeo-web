
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TwoListSelectionComponent } from './two-list-selection.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TwoListSelectionComponent }
]);
