import { Component, OnInit } from '@angular/core';
import { Product } from './_models/overview.model';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.sass']
})
export class ProductOverviewComponent implements OnInit {
  products: Product[] = [
    {id: 1, name: 'Shoes', description: 'These are some great shoes!', price: 40},
    {id: 2, name: 'Laptop', description: 'A really fast laptop', price: 60},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
