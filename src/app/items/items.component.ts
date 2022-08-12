import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith } from 'rxjs';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  itemTypeFormControl = new FormControl('D');

  items$!: Observable<Item[]>;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.itemTypeFormControl.valueChanges
    .pipe(
      startWith(this.itemTypeFormControl.value)
    )
    .subscribe(
      v => (this.items$ = v === 'D' ? this.itemService.getItems() : this.itemService.getExtraItems())
    );
  }

  gotoEdit(item: Item) {
    this.router.navigate(['edit', item.id], {
      relativeTo: this.route,
    });
  }
}
