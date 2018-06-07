import {Route} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './product/home/home.component';
import { TvProductComponent } from './tvproduct/tvproduct.component';
import { CartProductComponent } from './cartproduct/cartproduct.component';

export const routes:Route[]=[
  {
    path:'amazon--Angular',component:HomeComponent
  }
    ,{
        path:'home',component:HomeComponent
      },
        {
        path:'electronics',component:ProductComponent
        },{
          path:'TVs',component:TvProductComponent
           },{
            path:'Cart',component:CartProductComponent
             },{path:'',component:HomeComponent},

];