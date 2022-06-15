import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactiveHeroFormGuard } from './deactive-hero-form.guard';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: 'hero-form',
    component: HeroFormComponent,
    canDeactivate: [DeactiveHeroFormGuard],
  },
  {
    path: 'hero-form/:id',
    component: HeroFormComponent,
    canDeactivate: [DeactiveHeroFormGuard],
  },
  { path: '', component: HeroesComponent },
];

@NgModule({
  declarations: [],
  providers: [DeactiveHeroFormGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
