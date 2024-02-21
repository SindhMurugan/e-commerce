import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishList:any[]=[]

  constructor(private productListService:ProductListService) { }

  ngOnInit(): void {
    this.getWishListItems()
  }

  getWishListItems(){
    this.productListService.getWishListItems().subscribe(res =>{
      this.wishList = res.data

    })
  }

  removeItem(id:object){
     this.productListService.removeWishListItem(JSON.stringify(id)).subscribe((res)=>{
      this.getWishListItems()
       
     })
    }


    addToCard(productId:object){
    
      this.productListService.addToCardJson(JSON.stringify(productId)).subscribe(res =>{
      })

      var addtoCard =  this.productListService.addToCardJson(JSON.stringify(productId))
      var removeWishList = this.productListService.removeWishListItem(JSON.stringify(productId))

      var obser$ = concat(addtoCard,removeWishList)
      obser$.subscribe(val =>{
        this.getWishListItems()
      })

    }

}
