import { Injectable } from '@angular/core';
import { Iproduct } from '../product-list/products';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap ,catchError, map} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

   productURL =  "../assets/api/abc.json";

  constructor(private http : HttpClient){
    console.log('productURL: ', this.productURL);
  }

  getProducts(){
    return this.http.get(this.productURL);

    // return this.http.get<Iproduct[]>(this.productURL).pipe(
    //  tap(data => console.log('All' + JSON.stringify(data)))
  
    // )
  }

  getProduct(id: number) {
    return this.getProducts().pipe(
      map((products) => products.find(p => p.productId === id))
    );
  }
  
}
