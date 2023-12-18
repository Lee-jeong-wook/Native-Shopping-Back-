import ItemsInterface from "../interfaces/ItemsInterface";
import UserInterface from "../interfaces/UserInterfsaces";
class Item {
    /**
     * to get All shopping Items from DB
     * @returns Items info
     */
    #getItemsAll(){
        return {"msg" : "getItemsAll success"};
    }
    /**
     * to show detail info about item
     * @param id get query id (Item ID)
     * @returns detail info by Item ID (Item ID, countLike, )
     */
    #getItem(id:ItemsInterface){
        return {"msg" : "getItem success"};
    }
    /**
     * add basket list
     * @param userID 
     * @param id itemID
     * @returns 
     */
    #addBasket(userID:UserInterface, id:ItemsInterface){
        return;
    }
    /**
     * decrese item count from basket list
     * @param userID 
     * @param id item ID
     * @returns 
     */
    #decreaseBasket(userID:UserInterface, id:ItemsInterface){
        return;
    }
    /**
     * add likes of Item
     * @returns 
     */
    #plusLike(){
        return;
    }
    /**
     * minus likes of Item
     * @returns 
     */
    #minusLike(){
        return;
    }
    getItem(id:ItemsInterface) {
        return this.#getItem(id);
    }
    getItemsAll(){
        return this.#getItemsAll();
    }
    handleBasket(msg:string, userID:UserInterface, id:ItemsInterface){
        if (msg === "add") return this.#addBasket(userID, id);
        return this.#decreaseBasket(userID, id);
    }
    handleLike(msg:string, userID:UserInterface, id:ItemsInterface){
        if (msg === "add") return this.#plusLike();
        return this.#minusLike();
    }
}

export default Item;