import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListService } from './service/product-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'toolbar-project';
  userInput:string =''
  cardItems :any[]= []
  showCardDetails:boolean=false
  price:number = 0
  constructor(private productListService:ProductListService, private router:Router){
   
    productListService.addedToCard.subscribe(val =>{
      if(val){
        this.getCartProductByCustomerId()
      }
      
    })
   
  }
  ngOnDestroy(): void {
   
    throw new Error('Method not implemented.');
  }

  keyUp(value:string){
    this.productListService.searchData$.next(value)

  }

  

  ngOnInit(): void {
    this.getCartProductByCustomerId()
  }

  cardContainer(){
    this.showCardDetails = !this.showCardDetails
   
  }

  getCartProductByCustomerId(){
  
    this.productListService.getItemsFromCard().subscribe((res)=>{
      this.cardItems = res.data
      this.cardItems.forEach((item)=>{
            this.price = this.price + item.productPrice
           })
          })

   

    
  }

  redirectToSales(){
    this.showCardDetails = false
    this.router.navigate(['/sale'])

  }


}
