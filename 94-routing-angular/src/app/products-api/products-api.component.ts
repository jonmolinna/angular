import { Component, OnInit } from '@angular/core';
import { productInterface } from '../model/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products-api',
  templateUrl: './products-api.component.html',
})
export class ProductsApiComponent implements OnInit {
  productsList: productInterface[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((data: productInterface[]) => {
      this.productsList = data;
    });
  }
}
