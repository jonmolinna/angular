import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { productInterface } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  private productService = inject(ProductService);

  productsList: productInterface[] = [];

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productsList = data;
      },
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
