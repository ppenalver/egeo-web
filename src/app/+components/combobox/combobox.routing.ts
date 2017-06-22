
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComboboxComponent } from './combobox.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ComboboxComponent }
]);
