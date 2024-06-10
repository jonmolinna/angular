import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postInterface } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<postInterface>> {
    return this.http.get<Array<postInterface>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
