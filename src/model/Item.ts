import ItemsInterface from "../interfaces/ItemsInterface";

class Item {
    #getItemsAll(){
        return {"msg" : "getItemsAll success"};
    }
    #getItem(id:ItemsInterface){
        return {"msg" : "getItem success"};
    }
    getItem(id:ItemsInterface) {
        return this.#getItem(id);
    }
    getItemsAll(){
        return this.#getItemsAll();
    }
}

export default Item;