import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './sales/sales.component';
import { SuccessfullComponent } from './successfull/successfull.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeImgComponent } from './home-img/home-img.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterCardPipe } from './filter-card.pipe';
import { AddressFormComponent } from './address-form/address-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    SuccessfullComponent,
    WishListComponent,
    HomeImgComponent,
    FilterCardPipe,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,MatIconModule,MatMenuModule,BrowserAnimationsModule,MatListModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
