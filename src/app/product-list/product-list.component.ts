import { Component ,OnInit } from '@angular/core';
import { Iproduct } from './products';
import {ProductDataService} from '../shared/product-data.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  title:string = 'Product list';
  isActive=true;
  filteredProducts:any[];
  _listFilter:string;
  

    product;

  get listFilter() {
     return this._listFilter;
  }
  
  set listFilter(value) {
    //console.log('in set :: ', value);
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.pfilter(this.listFilter) : this.product;
    console.log(this.filteredProducts);
  }


  constructor(public list : ProductDataService) { 

    console.log('testing',this.product);
     
    console.log('in constructor',list.getProducts());
  }

  
  pfilter(filterby){
    //let name=  $evnet.target.value.toLocaleLowerCase();
    //console.log(name.length);
   // if(name.length){

      filterby=filterby.toLocaleLowerCase();
      return this.product.filter((f)=> {
       return f.productName.toLocaleLowerCase().indexOf(filterby) !== -1;
     });
     

  //    this.products=filtered;
  //    }
  //    else 
  //    {
  //      this.products=this.fproducts;
  //    }
  // }
}
ngOnInit() {
  
  
  this.list.getProducts().subscribe(data => { 
    console.log(data);
    this.product = data;
    console.log('testing ----',this.product);
    this.filteredProducts=this.product;
    console.log(this.filteredProducts);
  }
  );

}


}