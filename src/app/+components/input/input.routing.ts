import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InputComponent } from './input.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: InputComponent }
]);
