import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AppAuthGuard} from "../guards/AuthGuard";

const _routes: Routes = [
  {
    path: "app",
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
    canActivate: [AppAuthGuard],
    loadChildren: () => import("../components/auth/auth.module").then(m => m.AppAuthModule)
  },
  { path: '', redirectTo: '/app/public/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'app/private/products' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(_routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
