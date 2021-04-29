import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HomeComponent } from './home/home.component';
import { AdressComponent } from './offer/adress/adress.component';
import { OfferComponent } from './offer/offer.component';
import { RulesComponent } from './offer/rules/rules.component';
import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
                        {path:'',component:HomeComponent},
                        {path:'restaurants',component:RestaurantsComponent},
                        {path:'entertainment',component:EntertainmentComponent},
                        {path:'offer',component:HomeComponent},
                        {path:'offer/:id',component:OfferComponent,
                             children:[
                                       {path:'',component:RulesComponent},
                                       {path:'rules',component:RulesComponent},
                                       {path:'adress',component:AdressComponent}
                        ]},
                        {path:'purchase-order',component:PurchaseOrderComponent},
                        {path:'purchase-success',component:PurchaseOrderSuccessComponent}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
