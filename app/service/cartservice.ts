import {Item}from './item';
import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CartOperations{
cartArray:Item[];
constructor(private http:Http){
this.cartArray=new Array(); 
}
isAdded(item:Item){
    var bl:Boolean=false;
this.cartArray.forEach((obj)=>{
   

    if(obj.id==item.id){
        bl=true;
    }
});
return bl;
}

addToCart(obj:Item){
if(this.isAdded(obj)==false){

this.cartArray.push(obj);
console.log('added to cart');
console.log(this.cartArray);

}else{
   alert('product already added to Cart'); 
}
}

deleteFromCart(id:number){
    this.cartArray = this.cartArray.filter(itemObject=>{
        if(itemObject.id!=id){
          return itemObject;
        }
    });     
}
}