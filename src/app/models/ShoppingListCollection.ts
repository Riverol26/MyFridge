import { shoppingList } from './shoppingList';

export class shoppingListCollection {
    lists: shoppingList[];
    
    constructor(name: String) {
        this.lists = new Array;
    }

    addList(list: shoppingList) {
        this.lists.push(list);
    }
}
