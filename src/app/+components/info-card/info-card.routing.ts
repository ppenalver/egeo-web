
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfoCardComponent } from './info-card.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: InfoCardComponent }
]);
