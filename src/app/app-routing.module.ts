import { Error404Component } from './pages/core/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    title: '首頁',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'search',
    title: '搜尋',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'product',
    title: '產品',
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'member',
    title: '會員',
    loadChildren: () =>
      import('./pages/member/member.module').then((m) => m.MemberModule),
  },
  { path: '404', component: Error404Component, title: '找不到網頁' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
