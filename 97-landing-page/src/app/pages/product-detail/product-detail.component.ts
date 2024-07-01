import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInterface } from '../../model/product.model';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ApiService);

  loading: boolean = true;
  public product?: productInterface;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService
        .getProduct(params['id'])
        .subscribe((data: productInterface) => {
          this.product = data;
          this.loading = false;
        });
    });
  }
}
