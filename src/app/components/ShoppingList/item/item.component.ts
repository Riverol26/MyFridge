import { Component, Input, OnInit } from '@angular/core';
import { shoppingListItem } from '../../../models/shoppingListItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: shoppingListItem

  constructor() { 
    
  }

  ngOnInit() {

  }

  increment() {
    let temp = this.item.quantity++;    
    this.item.quantity = temp;
  }

  decrement() {
    let temp = this.item.quantity--;
    this.item.quantity = temp;
  }

}
