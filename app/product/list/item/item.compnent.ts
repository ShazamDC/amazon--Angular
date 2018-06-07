import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item } from './../../../service/item';

@Component({
  selector: 'item-comp',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent{
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