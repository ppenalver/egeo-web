import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TextareaComponent } from './textarea.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: TextareaComponent }
]);
