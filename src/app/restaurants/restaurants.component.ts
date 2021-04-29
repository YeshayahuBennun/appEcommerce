import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [OffersService]
})
export class RestaurantsComponent implements OnInit {

  public offers: Offer[]

  constructor(private offerService: OffersService) { }

  ngOnInit(): void {
    this.offerService.getOffersByCategory('restaurante')
      .then((offers: Offer[]) => {
        this.offers = offers

      })
      .catch((param: any) => {
        console.log(param)
      })

  }

}
