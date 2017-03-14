import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './errors/error.404.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   {
      path: '', component: LayoutComponent, children: [
         // Redirections of main sections
         { path: '', redirectTo: 'main', pathMatch: 'full' },
         { path: 'branding', redirectTo: 'branding/logo', pathMatch: 'full' },
         { path: 'styleguide', redirectTo: 'styleguide/colors', pathMatch: 'full' },
         { path: 'components', redirectTo: 'components/button', pathMatch: 'full' },
         { path: 'services', redirectTo: 'services/regexp', pathMatch: 'full' },
         { path: 'pipes', redirectTo: 'pipes/filter', pathMatch: 'full' },

         // Lazy load modules
         { path: 'main', loadChildren: './+others/main/main.module#MainModule' },
         { path: 'branding', loadChildren: './+others/branding/branding.module#BrandingModule' }
      ]
   },

   { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
