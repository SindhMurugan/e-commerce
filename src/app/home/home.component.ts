import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productData:any[] =[]
  filterData:string =''
  projectObj ={
    "CartId": 0,
    "CustId": 0,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2024-02-04T08:11:38.363Z"
  }
  constructor(private productListService:ProductListService) { 
    this.productListService.addedToCard.subscribe(val =>{
    
      if(val){
        this.loadProducts()
      }
      
    }
      
    )
    this.productListService.searchData$.pipe(debounceTime(500)).subscribe(val =>{
      console.log("9999999" , val)
      this.filterData =val

    })
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.productListService.getAllProducts().subscribe(res=> {
      this.productData=res.data
    })
  }

  addToCard(productId:object){
    debugger
    // alert("added to card")
    // this.projectObj.ProductId = productId
    this.productListService.addToCardJson(JSON.stringify(productId)).subscribe(res =>{
      this.productListService.addedToCard.next(true)
    })
    
  
    // this.productListService.addToCard(productId).subscribe(res=> {
    //   if(res.data){
    //     this.productListService.addedToCard.next(true)
    //   }
     
    // })

  }

}
