import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { fromEventPattern } from 'rxjs';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'products/id', component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'wecome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
