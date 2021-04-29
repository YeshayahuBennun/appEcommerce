import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css'],
  providers:[OffersService]
})
export class AdressComponent implements OnInit {
  public adress: string = ''

  constructor(private route: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((param:Params)=>{
      this.offersService.getAdressOfferById(param.id)
        .then((adress: string) => {
          this.adress = adress
        })

    })
  }
}
