import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-success',
  templateUrl: './purchase-order-success.component.html',
  styleUrls: ['./purchase-order-success.component.css']
})
export class PurchaseOrderSuccessComponent implements OnInit {

  @Input()public purchasedSuccessId:number

  constructor() { }

  ngOnInit(): void {
  }

}
