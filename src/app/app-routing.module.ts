import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/dashboard/modules/products/products.component';
import { OrdersComponent } from './modules/dashboard/modules/orders/orders.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'products',
  //       component: ProductsComponent,
  //     },
  //     {
  //       path: 'orders',
  //       component: OrdersComponent,
  //     },
  //   ],
  // },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
