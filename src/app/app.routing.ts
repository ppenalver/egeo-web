import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './errors/error.404.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
   {
      path: '', component: LayoutComponent, children: [
         // Redirections
         { path: '', redirectTo: 'main', pathMatch: 'full' },
         // Lazy load modules
      ]
   },

   { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
