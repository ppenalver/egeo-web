
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: MainComponent }
]);
