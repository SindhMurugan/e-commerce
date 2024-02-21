import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  
  cardItems :any[]=[]
  showCardDetails:boolean=false
 
  price:number = 0
  constructor(private productListService:ProductListService, private router:Router){
    productListService.addedToCard.subscribe(val =>{
      if(val){
        this.getCartProductByCustomerId()
      }
      
    })

 

    // 
  }
 

  ngOnInit(): void {
    this.getCartProductByCustomerId()
  }

  cardContainer(){
    this.showCardDetails = !this.showCardDetails
   
  }

  getCartProductByCustomerId(){
    debugger;
    // this.productListService.getCardProductByCustomerId(1).subscribe((res)=>{
      // this.cardItems = res.data
      // this.cardItems.forEach((item)=>{
      //   this.price = this.price + item.productPrice
      //  })

    // })

    this.productListService.getItemsFromCard().subscribe((res)=>{
   
        this.productListService.addedToCard.next(false)
   
      this.cardItems = res.data
      this.cardItems.forEach((item)=>{
            this.price = this.price + item.productPrice
           })

      console.log("YYYYYYYYY" , res.data , this.cardItems)
    })

   

    
  }

  redirectToSucessfull(){
    this.router.navigate(['/address'])
  }

  removeItem(id:object){
   
    this.productListService.removeItems(JSON.stringify(id)).subscribe((res)=>{
      if(res == 'ok'){
       
        this.productListService.addedToCard.next(true)
      }
    })

   

  }

  moveToWishList(item:object){
   

    this.removeItem(item)
    this.productListService.addToWishList(JSON.stringify(item)).subscribe()
  }


}
