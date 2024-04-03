import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppGlobalLayoutComponent } from '../components/layout/layout.component';

const _routes: Routes = [
  {
    path: "app",
    component: AppGlobalLayoutComponent,
    children: [
      {
        path: "private",
        loadChildren: () => import("../../private/modules/private.module").then(m => m.AppPrivateModule)
      },
      {
        path: "public",
        loadChildren: () => import("../../public/modules/public.module").then(m => m.AppPublicModule)
      }
    ]
  },
  {
    path: "auth",
    loadChildren: () => import("../../public/components/auth/auth.module").then(m => m.AppAuthModule)
  },
  { path: '', redirectTo: '/app/public', pathMatch: 'full' },
  { path: '**', redirectTo: 'app/private/products' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(_routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
