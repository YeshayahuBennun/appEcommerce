import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { URL_API } from "./app.api"
import { Offer } from "./shared/offer.model"



@Injectable()
export class OffersService {

    constructor(private http: HttpClient) { }


    public getOffers(): Promise<Offer[]> {
        return this.http.get(`${URL_API}/offers?highlights=true`)
            .toPromise()
            .then()
    }

    public getOffersByCategory(category: string): Promise<Offer[]> {
        return this.http.get(`${URL_API}/offers?category=${category}`)
            .toPromise()
            .then()
    }

    public getOfferById(id: number): Promise<Offer> {
        return this.http.get(`${URL_API}/offers?id=${id}`)
            .toPromise()
            .then((answer: any) => answer[0])
    }

    public getRulesOfferById(id: number): Promise<string> {
        return this.http.get(`${URL_API}/rules?id=${id}`)
            .toPromise()
            .then((answer: any) => {
                return answer[0].description
            })
    }

    public getAdressOfferById(id: number) {
        return this.http.get(`${URL_API}/adress?id=${id}`)
            .toPromise()
            .then((answer: any) => {
                return answer[0].description
            })
    }

    public serarchOffer(term: string): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${URL_API}/offers?description_like=${term}`)
    }
}