
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Info-cardComponent } from './info-card.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Info-cardComponent }
]);
