import { Component, OnInit } from '@angular/core';
import { productInterface } from '../model/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products-api-detail',
  templateUrl: './products-api-detail.component.html',
})
export class ProductsApiDetailComponent implements OnInit {
  product?: productInterface;
  loading: boolean = true;
  color: string = '';

  constructor(private route: ActivatedRoute, private apiSerive: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.apiSerive.getProductById(Number(params['productId'])).subscribe({
          next: (data: productInterface) => {
            this.product = data;
            this.color = (this.product?.price as number) > 100 ? 'red' : '';
            this.loading = false;
          },
          error: (error: any) => {
            console.log('Error', error);
            this.loading = false;
          },
        });
      },
      error: (error: any) => {
        console.log('Error', error);
      },
    });
  }
}
