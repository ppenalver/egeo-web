import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: HelpComponent }
]);
