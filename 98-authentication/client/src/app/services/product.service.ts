import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { productInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private app_url: string;
  private api_url: string;
  private http = inject(HttpClient);

  constructor() {
    this.app_url = environment.endpoint;
    this.api_url = 'api/products';
  }

  getProducts(): Observable<productInterface[]> {
    // const token = localStorage.getItem('ang-token');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // return this.http.get<productInterface[]>(`${this.app_url}${this.api_url}`, {
    //   headers,
    // });
    const response = this.http.get<productInterface[]>(
      `${this.app_url}${this.api_url}`
    );
    return response;
  }
}
