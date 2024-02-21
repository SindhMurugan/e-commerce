import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-home-img',
  templateUrl: './home-img.component.html',
  styleUrls: ['./home-img.component.css']
})
export class HomeImgComponent implements OnInit {

  constructor(private productListService:ProductListService) { }
  id:any
  loopNumber =0

  ngOnInit(): void {

    // this.id = setInterval(() => {
    //   console.log("KKKKKKKKKKK")
    //   this.loopNumber += 1
    //   if(this.images.length-1 == this.loopNumber){
    //     this.loopNumber =0
    //   }
      
    //   this.loopImg(this.loopNumber); 
    // }, 5000);
  }

 

 

  images = [
    
    './assets/home2.webp',
    './assets/home3.webp',
    './assets/home4.webp',
    './assets/home5.webp',
    './assets/home6.webp',
    './assets/home7.webp',
    
  ];

  displayImg =this.images[0]

  loopImg(index:number){
    this.displayImg =this.images[index]
  }



  changeImage(){
    
   
    if(this.images.length-1 == this.productListService.sliderImg){
      this.displayImg =this.images[this.productListService.sliderImg]
     
      
    }
    else{
      this.productListService.sliderImg += 1;
      this.displayImg =this.images[this.productListService.sliderImg]
    }

  }

  changePreviousImage(){
    // this.productListService.sliderImg -= 1;
    // this.displayImg =this.images[this.productListService.sliderImg]
     
    if(0 == this.productListService.sliderImg){
      this.displayImg =this.images[this.productListService.sliderImg]
      
    }
    else{
      this.productListService.sliderImg -= 1;
      this.displayImg =this.images[this.productListService.sliderImg]
    }

  }

 
}
