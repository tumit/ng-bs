import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';

import { ItemViewComponent } from './item-view/item-view.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [
    ItemsComponent,
    ItemFormComponent,
    ItemViewComponent,
  ],
  imports: [CommonModule, ItemsRoutingModule],
})
export class ItemsModule {}
