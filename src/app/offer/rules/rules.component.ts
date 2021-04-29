import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable, Subscriber } from 'rxjs';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
  providers: [OffersService]
})
export class RulesComponent implements OnInit {

  public rules: string = ''

  constructor(private route: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((param:Params)=>{
      this.offersService.getRulesOfferById(param.id)
        .then((rules: string) => {
          this.rules = rules
        })

    })
  }

}
