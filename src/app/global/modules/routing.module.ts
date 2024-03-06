import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
        loadChildren: () => import("../../public/public.module").then(m => m.AppPublicModule)
      }
    ]
  },
  { path: '', redirectTo: "app", pathMatch: "full" },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(_routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
