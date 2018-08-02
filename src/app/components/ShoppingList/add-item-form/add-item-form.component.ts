import { Component, OnInit, Input } from '@angular/core';
import { shoppingListItem } from '../../../models/shoppingListItem';
import { shoppingList } from '../../../models/shoppingList';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input() list: shoppingList;

  name: string;
  quantity: number;
  description: string;
  preferredQuantity: number;

  showHelp: boolean;

  constructor() { 
    this.name = '';
    this.quantity = 0;
    this.description = '';
    this.preferredQuantity = 1;
  }

  ngOnInit() {
   this.showHelp = false;
  }

  addItem(){
    this.list.addItem(new shoppingListItem(this.name, this.quantity, this.preferredQuantity, this.description));
    this.name = '';
    this.quantity = 0;
    this.description = '';
    this.preferredQuantity = 0;
  }

}
