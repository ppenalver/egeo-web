import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StAlertsDocComponent } from './alerts.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: StAlertsDocComponent }
]);
