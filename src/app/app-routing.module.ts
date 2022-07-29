import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { titleList } from './constant/const/title.const'
import { Error404Component } from './pages/core/error404/error404.component'

const routes: Routes = [
    {
        path: 'home',
        title: titleList.root + '首頁',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
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
