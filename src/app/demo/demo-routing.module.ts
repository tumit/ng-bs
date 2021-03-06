import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';

const routes: Routes = [
  {
    path: 'routing-and-navigation',
    component: RoutingAndNavigationComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
