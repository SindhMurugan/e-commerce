import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  addedToCard = new Subject<boolean>()
  sliderImg:number =0
  searchData$ = new BehaviorSubject<string>('')

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    // return this.http.get<any>('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts')
    return this.http.get('http://localhost:5000/getAllProducts')

  }

  addToCard(obj:any):Observable<any>{
    debugger
    return this.http.post<any>('https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart',obj)
  }

  getCardProductByCustomerId(id:number):Observable<any>{
    return this.http.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id='+id)
    
  }

  addToCardJson(obj:any):Observable<any>{
    return this.http.post('http://localhost:5000/cart',obj)
  }

  getItemsFromCard():Observable<any>{
    return this.http.get('http://localhost:5000/getCard')
  }

  removeItems(id:any):Observable<any>{
    return this.http.post('http://localhost:5000/removeItem',id)
  }

  addToWishList(obj:any):Observable<any>{
    return this.http.post('http://localhost:5000/addWishList',obj)
  }

  getWishListItems():Observable<any>{
    return this.http.get('http://localhost:5000/wishList')
  }

  removeWishListItem(id:any):Observable<any>{
    return this.http.post('http://localhost:5000/removeWishItem',id)
  }

}
