import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';
import { ShopCartService } from '../shop-cart.service';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]

})
export class OfferComponent implements OnInit, OnDestroy {

  public offer: Offer
  public imageList: string



  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private shopCartService: ShopCartService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((param: Params) => {

      this.offersService.getOfferById(param.id)
        .then((offer: Offer) => {
          this.offer = offer
        })
        .catch((param: any) => {
          console.log(param)
        })
    })
  }

  ngOnDestroy(): void {
  }

  public addToCart() {
    this.shopCartService.addItem(this.offer)
    if(confirm('Ir para o carrinho de compras?')){
      this.router.navigate(['/purchase-order'])
    }else{
      this.router.navigate(['/'])
    }
  }


}
