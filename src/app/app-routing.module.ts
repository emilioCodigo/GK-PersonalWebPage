import { titleList } from './constant/const/title.const'
import { Error404Component } from './pages/core/error404/error404.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { title } from 'process'

const routes: Routes = [
    {
        path: 'home',
        title: titleList.root + '首頁',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'search',
        title: titleList.root + '搜尋',
        loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchModule),
    },
    {
        path: 'product',
        title: titleList.root + '產品',
        loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
    },
    {
        path: 'member',
        title: titleList.root + '會員',
        loadChildren: () => import('./pages/member/member.module').then((m) => m.MemberModule),
    },
    { path: '404', component: Error404Component, title: '找不到網頁' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: '404' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
