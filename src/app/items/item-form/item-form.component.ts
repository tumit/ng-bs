import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  itemForm = this.fb.group<Item>({
    id: null,
    name: '',
    description: '',
  });

  constructor(private fb: NonNullableFormBuilder, private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')!);

    this.itemService.getItem(id).subscribe(item => this.itemForm.setValue(item));
  }

  onSave(item: Item) {
    console.log('item', item);
  }
}
