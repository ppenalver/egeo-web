
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Info-boxComponent } from './info-box.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: Info-boxComponent }
]);
