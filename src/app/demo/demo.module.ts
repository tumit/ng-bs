import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';

@NgModule({
  declarations: [RoutingAndNavigationComponent],
  imports: [DemoRoutingModule],
})
export class DemoModule {}
