import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { OffersService } from '../offers.service';
import { Offer } from '../shared/offer.model';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [OffersService]
})
export class TopComponent implements OnInit {

  public offers: Observable<Offer[]>
  private subjectSearch = new Subject<string>()

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.offers = this.subjectSearch.pipe(debounceTime(1000), distinctUntilChanged(), switchMap((term: string) => {
      
      if (term.trim() === '') {
        return of<Offer[]>([])
      }
      return this.offersService.serarchOffer(term)
    }), catchError(() => {
      return of<Offer[]>([])
    }))

  }

  public search(searchTerm: string) {
    this.subjectSearch.next(searchTerm)
  }

  public clearSearch(){
    this.subjectSearch.next('')

  }

}
