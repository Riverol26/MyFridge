export class shoppingListItem {
    name: string;
    quantity: number;
    preferredQuantity: number;
    description: string;
    done: boolean

    
    constructor(name: string, quantity: number,preferredQuantity: number, description: string) {
        this.name = name;
        this.quantity = quantity;
        this.preferredQuantity = preferredQuantity
        this.description = description;
        this.done = false;
    }
}
