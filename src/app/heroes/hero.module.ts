import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent, HeroFormComponent],
  imports: [CommonModule, HeroRoutingModule],
})
export class HeroModule {}
