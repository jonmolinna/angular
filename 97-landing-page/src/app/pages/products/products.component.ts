import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { productInterface } from '../../model/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ApiService);
  private router = inject(Router);

  productList: productInterface[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: productInterface[]) => {
      this.productList = data;
    });
  }

  navegate(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
