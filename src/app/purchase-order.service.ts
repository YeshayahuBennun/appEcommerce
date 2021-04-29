import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL_API } from "./app.api";
import { Order } from "./shared/order.model";

@Injectable()
export class PurchaseOrderService{

    constructor(private http:HttpClient){}


    public purchase(order:Order):Observable<any>{

        let headers = new HttpHeaders({
            'Content-type':'application/json'
        })

        let options = {headers:headers}
                
        return this.http.post<any>(
            `${URL_API}/orders`,order,options
        ) 
    }
}