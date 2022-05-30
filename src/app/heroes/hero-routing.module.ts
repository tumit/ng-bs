import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'hero-form/:id', component: HeroFormComponent },
  { path: '', component: HeroesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class HeroRoutingModule {}
