import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrderService } from '../purchase-order.service';
import { CartItem } from '../shared/cart-item.model';
import { Order } from '../shared/order.model';


import { ShopCartService } from '../shop-cart.service';



@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  providers: [PurchaseOrderService]

})
export class PurchaseOrderComponent implements OnInit {

  public purchasedSuccessId: number
  public shopCartItens: CartItem[] = []

  public form: FormGroup = new FormGroup({
    'adress': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'number': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complement': new FormControl(null),
    'payment': new FormControl(null, [Validators.required])
  })


  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private shopCartService: ShopCartService) { }

  ngOnInit(): void {
    this.shopCartItens = this.shopCartService.showItens()
  }

  public onSubmit() {
    if (this.form.status === 'INVALID') {

      this.form.get('adress').markAllAsTouched()
      this.form.get('number').markAllAsTouched()
      this.form.get('complement').markAllAsTouched()
      this.form.get('payment').markAllAsTouched()
    } else {

      if (this.shopCartItens.length === 0) {
        alert('Você não selecionou nenhum item!')
      } else {

        let order: Order = new Order(
          this.form.value.adress,
          this.form.value.number,
          this.form.value.complement,
          this.form.value.payment,
          this.shopCartService.showItens())

        this.purchaseOrderService.purchase(order).subscribe((purchasedSuccessId: any) => {
          this.purchasedSuccessId = purchasedSuccessId.id
          this.shopCartService.clearShopCart()

        })
      }
    }
  }

  public add(item: CartItem) {
    this.shopCartService.incrementAmount(item)

  }

  public decrement(item: CartItem) {
    this.shopCartService.decrementAmount(item)
  }
}
