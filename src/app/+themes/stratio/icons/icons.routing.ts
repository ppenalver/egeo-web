
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconsComponent } from './icons.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: IconsComponent }
]);
