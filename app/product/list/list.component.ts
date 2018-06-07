import { Component } from '@angular/core';
import { ItemOperations } from './../../service/itemOperations';
import {Item} from './../../service/item';
import { OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChanges } from '@angular/core';
import { CartOperations } from './../../service/cartservice';
@Component({
  selector: 'list-comp',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {
  itemList:Item[];
  constructor(private itemOperations:ItemOperations,private cartoperations:CartOperations){  
  this.itemOperations.callServer().then(item=>{
     this.itemList=item;
    
});
   
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



