import { Component } from '@angular/core';
import { TvItemOperations } from './../../service/tvservice';
import {Item} from './../../service/item'
import { OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';
import { CartOperations } from './../../service/cartservice';
@Component({
  selector: 'tv-list-comp',
  templateUrl: 'tvlist.component.html',
  styleUrls: ['tvlist.component.css']
})
export class TvListComponent {
  itemList:Item[];
  constructor(private tvitemOperations:TvItemOperations,private cartoperations:CartOperations){  
  this.tvitemOperations.callServer().then(item=>{
     this.itemList=item;
    
});
    console.log("constructor invoked");
   
    }
    toggleAddToCart(data):void{
      this.itemList.forEach((obj)=>{
    if(obj.id==data){
     this.cartoperations.addToCart(obj); 
    }
    });

     
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



