import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './errors/error.404.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   {
      path: '', component: LayoutComponent, children: [
         // Main redirection
         { path: '', redirectTo: 'main', pathMatch: 'full' },
         // Redirections of main sections
         { path: 'branding', redirectTo: 'branding/logo', pathMatch: 'full' },
         { path: 'styleguide', redirectTo: 'styleguide/colors', pathMatch: 'full' },
         { path: 'components', redirectTo: 'components/buttons/button', pathMatch: 'full' },
         { path: 'services', redirectTo: 'services/regexp', pathMatch: 'full' },
         { path: 'pipes', redirectTo: 'pipes/filter', pathMatch: 'full' },

         // redirection of components
         { path: 'components/buttons', redirectTo: 'components/buttons/button', pathMatch: 'full' },
         { path: 'components/feedback', redirectTo: 'components/feedback/spinner', pathMatch: 'full' },
         { path: 'components/forms', redirectTo: 'components/forms/input', pathMatch: 'full' },

         // ************** LAZY LOAD MODULES ********************
         { path: 'main', loadChildren: './+others/main/main.module#MainModule' },

         // general modules
         { path: 'branding', loadChildren: './+others/branding/branding.module#BrandingModule' },

         // styleguide
         { path: 'styleguide/colors', loadChildren: './+styleguide/colors/colors.module#ColorsModule' },
         { path: 'styleguide/grid', loadChildren: './+styleguide/grid/grid.module#GridModule' },
         { path: 'styleguide/icons', loadChildren: './+styleguide/icons/icons.module#IconsModule' },
         { path: 'styleguide/typography', loadChildren: './+styleguide/typography/typography.module#TypographyModule' },


         // Components modules
         // **** buttons
         { path: 'components/buttons/button', loadChildren: './+components/button/button.module#ButtonModule' },
         { path: 'components/buttons/toggle', loadChildren: './+components/toggle-button/toggle-button.module#ToggleButtonModule' },
         // **** feedback
         { path: 'components/feedback/spinner', loadChildren: './+components/spinner/spinner.module#SpinnerModule' },
         // **** form
         { path: 'components/forms/input', loadChildren: './+components/input/input.module#InputModule' }
         // **** info
         // **** login
         // **** modals
         // **** navigation
         // **** tooltip
         // **** search

      ]
   },

   { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
