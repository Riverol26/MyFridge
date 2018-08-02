import { Component } from '@angular/core';
import { shoppingListItem } from '../../../models/shoppingListItem';
import { shoppingListCollection } from '../../../models/ShoppingListCollection';
import { shoppingList } from '../../../models/shoppingList';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  lists: shoppingListCollection;
  formOpen: number;

  constructor() { 
    this.lists = new shoppingListCollection('Collection');
    this.formOpen = -1;
  }

  ngOnInit() {
    let list = new shoppingList('Fridge');
    let list2 = new shoppingList('Freezer');
    let list3 = new shoppingList('Pantry');
    let list4 = new shoppingList('Cabinets');
    this.lists.addList(list);
    this.lists.addList(list2);
    this.lists.addList(list3);
    this.lists.addList(list4);
  }


  closeForm() {
    this.formOpen = -1;
  }

  openForm(index: number) {
    this.formOpen = index;
  }
}
