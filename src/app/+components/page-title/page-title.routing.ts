
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageTitleComponent } from './page-title.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: PageTitleComponent }
]);
