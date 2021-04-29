import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';

import { BaseboardComponent } from './baseboard/baseboard.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { OfferComponent } from './offer/offer.component';
import { RulesComponent } from './offer/rules/rules.component';
import { AdressComponent } from './offer/adress/adress.component';
import { ShortDescriptionPipe } from './utilities/short-description.pipe';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopCartService } from './shop-cart.service';








@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent,
    BaseboardComponent,
    RestaurantsComponent,
    EntertainmentComponent,
    OfferComponent,
    RulesComponent,
    AdressComponent,
    ShortDescriptionPipe,
    PurchaseOrderComponent,
    PurchaseOrderSuccessComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
