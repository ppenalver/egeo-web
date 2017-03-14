
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChangelogComponent } from './changelog.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
   { path: '', component: ChangelogComponent }
]);
