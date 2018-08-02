import { shoppingListItem } from './shoppingListItem';

export class shoppingList {
    
    name: String;
    items: shoppingListItem[];
    
    constructor(name: String) {
        this.items = new Array;
        this.name = name;
    }

    addItem(item: shoppingListItem) {
        this.items.push(item);
    }

    


}
