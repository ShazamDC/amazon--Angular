import { Component } from '@angular/core';
import {CartOperations }from './../../service/cartservice'
@Component({
  selector: 'search-comp',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent{
   constructor(public cart:CartOperations){
var size=cart.cartArray.length;
   } 
}