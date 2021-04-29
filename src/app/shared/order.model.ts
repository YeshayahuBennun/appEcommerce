import { CartItem } from "./cart-item.model";

export class Order{

    constructor(
        public adress:string,
        public number:string,
        public complement:string,
        public payment:string,
        public itens:Array<CartItem> 
    ){}
}