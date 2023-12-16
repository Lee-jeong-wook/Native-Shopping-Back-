import ItemsInterface from "../interfaces/ItemsInterface";

class Item {
    #getItems(id:ItemsInterface){

    }
    getItems(id:ItemsInterface) {
        return this.#getItems(id);
    }
}

export default Item;