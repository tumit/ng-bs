import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CatComponent } from './pages/cat/cat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WomanComponent } from './pages/woman/woman.component';
import { AppPreloadingStrategy } from './preloading/app-preloading.service';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
    data: { preload: false },
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'show-woman',
    component: WomanComponent,
    outlet: 'left',
  },
  {
    path: 'show-cat',
    component: CatComponent,
    outlet: 'right',
  },
  {
    path: 'heroes',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./heroes/hero.module').then(
        m => m.HeroModule
      ),
    data: { preload: true, delay: 5000 },
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./items/items.module').then(
        m => m.ItemsModule
      ),
    canLoad: [AuthGuard],
    data: { preload: true, delay: 100 },
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demo/demo.module').then(m => m.DemoModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  providers: [AppPreloadingStrategy],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: AppPreloadingStrategy,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
