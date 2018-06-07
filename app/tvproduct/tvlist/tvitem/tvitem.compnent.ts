import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item } from './../../../service/item';

@Component({
  selector: 'tv-item-comp',
  templateUrl: 'tvitem.component.html',
  styleUrls: ['tvitem.component.css']
})
export class TvItemComponent{
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