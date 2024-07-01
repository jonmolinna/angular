import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productInterface } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private url: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<productInterface[]> {
    return this.http.get<productInterface[]>(this.url);
  }

  getProduct(id: number): Observable<productInterface> {
    return this.http.get<productInterface>(`${this.url}/${id}`);
  }
}
