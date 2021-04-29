import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "./shared/cart-item.model";
import { Offer } from "./shared/offer.model";

@Injectable()
class ShopCartService {

    public itens: CartItem[] = []
    public router: Router


    public showItens() {

        return this.itens

    }

    public addItem(offer: Offer) {
        let cartItem: CartItem = new CartItem(
            offer.id,
            offer.images[0],
            offer.title,
            offer.description,
            offer.price,
            1
        )

        let cartItemFound = this.itens.find((item: CartItem) => item.id === cartItem.id)

        if (cartItemFound) {
            cartItemFound.amount += 1
        } else {
            this.itens.push(cartItem)

        }
    }

    public totalCartShop(): number {

        let total: number = 0

        this.itens.map((item: CartItem) => {
            total = total + (item.price * item.amount)
        })

        return total
    }

    public incrementAmount(cartItem: CartItem) {

        let cartItemFound = this.itens.find((item: CartItem) => item.id === cartItem.id)

        if (cartItemFound) {
            cartItemFound.amount += 1
        }
    }

    public decrementAmount(cartItem: CartItem) {

        let cartItemFound = this.itens.find((item: CartItem) => item.id === cartItem.id)

        if (cartItemFound) {

            if(cartItemFound.amount!==0){
            cartItemFound.amount -= 1
        }

            if (cartItemFound.amount === 0) {
                this.itens.splice(this.itens.indexOf(cartItemFound),1)
            }
        }
    }

    public clearShopCart() {
        this.itens = []
    }

}

export { ShopCartService }