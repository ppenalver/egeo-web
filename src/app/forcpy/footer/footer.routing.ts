
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: FooterComponent }
]);
