
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ModalComponent }
]);
