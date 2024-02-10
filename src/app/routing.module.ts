import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LandingPageComponent } from './shared/visitor/landing-page/landing-page.component';
import { ItemFormComponent } from './shared/components/item-form/item-form.component';
import { ItemListComponent } from './shared/components/item-list/item-list.component';
import { LogoutGuard } from './core/auth/guards/log-out.guard';
import { LogInComponent } from './core/auth/components/log-in/log-in.component';
import { SignUpComponent } from './core/auth/components/sign-up/sign-up.component';
import { UserComponent } from './core/components/user/user.component';
import { CarrinhoListComponent } from './core/components/carrinho/carrinho-list.component';
import { ItemsDataResolver } from './shared/components/items-data.resolver';
import { AgendamentoListComponent } from './core/components/documentos/agendamento/agendamento-list.component';
import { SectionActivationGuard as SectionActivationGuard } from './core/services/section-activation.guard';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { EmployeeGuard } from './core/services/employee.guard';

const _routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'log-in',
        component: LogInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'produtos',
        data: {isProduto: true, hideShopping: false},
        children: [
          {
            path: '',
            component: ItemListComponent
          },
          {
            path: 'add',
            canActivate: [EmployeeGuard],
            component: ItemFormComponent
          },
          {
            path: 'edit',
            canActivate: [EmployeeGuard],
            resolve: {dynamic: ItemsDataResolver},
            component: ItemFormComponent
          }
        ],
      },
      {
        path: 'servicos',
        data: {isProduto: false, hideShopping: false},
        children: [
          {
            path: '',
            component: ItemListComponent
          },
          {
            path: 'add',
            canActivate: [EmployeeGuard],
            component: ItemFormComponent
          },
          {
            path: 'edit',
            canActivate: [EmployeeGuard],
            resolve: {dynamic: ItemsDataResolver},
            component: ItemFormComponent
          }
        ],
      },
      {
        path: 'user',
        canActivate: [EmployeeGuard],
        children: [
          {
            path: 'funcionario',
            component: UserComponent
          },
          {
            path: 'cliente',
            component: UserComponent
          }
        ]
      },
      {
        path: 'carrinho',
        canActivate: [SectionActivationGuard],
        component: CarrinhoListComponent,
        data: {hideShopping: true}
      },
      {
        path: 'agendamentos',
        canActivate: [SectionActivationGuard],
        component: AgendamentoListComponent
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'prefix' }
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
