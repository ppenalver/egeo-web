import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToggleButtonsComponent } from './toggle-button.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ToggleButtonsComponent }
]);
