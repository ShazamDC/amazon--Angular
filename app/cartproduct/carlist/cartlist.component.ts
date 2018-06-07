import { Component } from '@angular/core';
import { TvItemOperations } from './../../service/tvservice';
import {Item} from './../../service/item'
import { OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';
import { CartOperations } from './../../service/cartservice';
@Component({
  selector: 'cart-list-comp',
  templateUrl: 'cartlist.component.html',
  styleUrls: ['cartlist.component.css']
})
export class CartListComponent {
  itemList:Item[];
  isCartEmpty:Boolean;
  constructor(private cartoperations:CartOperations){
    this.itemList=this.cartoperations.cartArray;
    if(this.itemList.length==0){
     this.isCartEmpty=true;
    }else{
this.isCartEmpty=false;
    }  
  }
    toggleAddToCart(data):void{
      this.cartoperations.deleteFromCart(data);
      this.itemList=this.cartoperations.cartArray;
      if(this.itemList.length==0){
        this.isCartEmpty=true;
       }else{
   this.isCartEmpty=false;
       }
}
  

/*    ngOnInit()	
{
console.log('in ngOnInit');
}
ngOnChanges(changes: SimpleChanges){
console.log('in ngon changes')
}
ngOnDestroy(){
  console.log('in ngondestroy');
}
ngDoCheck(){
console.log('inside ngdocheck');
  
}
ngAfterContentInit()	
{
  console.log('inside ngAfterContentInit');
}
ngAfterContentChecked()	
{
  console.log('inside ngAfterContentChecked  ');
}
ngAfterViewInit()	
{
  console.log(' inside ngAfterViewInit');
}
ngAfterViewChecked()	
{
 console.log('inside ngAfterViewChecked ') ;
}
*/
}



