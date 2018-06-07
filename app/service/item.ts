export class Item{
id :number;
name:String;
desc:String;
color:String;
discount:number;
price:number;
paymentOptions:String[];
url:String;
warranty:String;
highlights:String[];
addToCart:boolean;
    constructor(id,name,desc, price, color,url,discount,paymentOptions,warranty,highlights,addToCart=false){
         this.id = id;  // Instance Var = Local Var
         this.name = name;
         this.desc =desc;
         this.price = price;
         this.color =color;
         this.url = url;
         this.highlights=highlights;
         this.discount=discount;
         this.paymentOptions=paymentOptions;
         this.warranty=warranty;
         this.addToCart=addToCart;
          }
         print(){
             console.log(" this is "+this.id);
         } 
        
}