import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { SuccessfullComponent } from './successfull/successfull.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeImgComponent } from './home-img/home-img.component';
import { AddressFormComponent } from './address-form/address-form.component';

const routes: Routes = [
  {
    path:'',component:HomeImgComponent
  },
  {path:'products' , component:HomeComponent},
  {path:'sale', component:SalesComponent},
  {path:'sucessfull' , component:SuccessfullComponent},
  {path:'wishList' , component:WishListComponent},
  {path:'address' , component:AddressFormComponent}
  // {
  //   path:'profile',component:ProfileComponent
  // },{
  //   path:'shop',component:ShopComponent
  // }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
