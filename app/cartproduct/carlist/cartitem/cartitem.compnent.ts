import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item } from './../../../service/item';

@Component({
  selector: 'cart-item-comp',
  templateUrl: 'cartitem.component.html',
  styleUrls: ['cartitem.component.css']
})
export class CartItemComponent{
  @Input()
  itemDetails:Item;
  @Output()
  addedToCart:EventEmitter<number> = new EventEmitter<number>(); 

  constructor(){
  } 
 
  AddedToCart(){
    
   this.addedToCart.emit(this.itemDetails.id);
  
  }
}