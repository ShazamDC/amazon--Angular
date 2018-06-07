import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemOperations } from './service/itemOperations';
import { AppComponent } from './app.component';
import { ItemComponent } from './product/list/item/item.compnent';
import { ListComponent } from './product/list/list.component';
import { SearchComponent } from './product/search/search.component';
import { ProductComponent } from './product/product.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './product/home/home.component';
import { routes } from './routes';
import {RouterModule} from '@angular/router';
import { TvProductComponent } from './tvproduct/tvproduct.component';
import { TvListComponent } from './tvproduct/tvlist/tvlist.component';
import { TvItemComponent } from './tvproduct/tvlist/tvitem/tvitem.compnent';
import { TvItemOperations } from './service/tvservice';
import { CartOperations } from './service/cartservice';
import { CartItemComponent } from './cartproduct/carlist/cartitem/cartitem.compnent';
import { CartListComponent } from './cartproduct/carlist/cartlist.component';
import { CartProductComponent } from './cartproduct/cartproduct.component';
@NgModule({
  declarations: [
    AppComponent,ItemComponent,ListComponent,SearchComponent,ProductComponent,HomeComponent,TvProductComponent,TvListComponent,TvItemComponent,CartItemComponent,CartListComponent,CartProductComponent
  ],  imports: [BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes)],



providers: [ItemOperations,TvItemOperations,CartOperations],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
