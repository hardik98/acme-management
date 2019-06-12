import { Iproduct } from './../product-list/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = "Product Detail";
  product: Iproduct[];

  constructor() { }

  ngOnInit() {
  }

}
