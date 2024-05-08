import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryInterface, productInterface } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  public getAllProducts(): Observable<productInterface[]> {
    return this.httpClient.get<productInterface[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<productInterface> {
    return this.httpClient.get<productInterface>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<categoryInterface[]> {
    return this.httpClient.get<categoryInterface[]>(
      `${this.baseURL}/categories`
    );
  }

  public addProduct(product: productInterface): Observable<productInterface> {
    return this.httpClient.post<productInterface>(`${this.baseURL}`, product);
  }

  public updateProduct(
    id: number,
    product: productInterface
  ): Observable<productInterface> {
    return this.httpClient.put<productInterface>(
      `${this.baseURL}/${id}`,
      product
    );
  }

  public deleteProduct(id: number): Observable<productInterface> {
    return this.httpClient.delete<productInterface>(`${this.baseURL}/${id}`);
  }
}
