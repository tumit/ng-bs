import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
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
    path: 'heroes',
    canActivate: [AuthGuardService],
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
    data: { preload: true, delay: 10000 },
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
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
