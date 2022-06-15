import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DeactiveHeroFormGuard } from './deactive-hero-form.guard';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent, HeroFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroRoutingModule,
  ],
})
export class HeroModule {}
