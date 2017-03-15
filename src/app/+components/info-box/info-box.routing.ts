
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfoBoxComponent } from './info-box.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: InfoBoxComponent }
]);
