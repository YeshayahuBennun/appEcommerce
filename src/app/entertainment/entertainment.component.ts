import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  providers: [OffersService]

})
export class EntertainmentComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offersService.getOffersByCategory('diversao')
      .then((offers: Offer[]) => {
        this.offers = offers
      })
      .catch((param: any) => {
        console.log(param)
      })
  }

}
