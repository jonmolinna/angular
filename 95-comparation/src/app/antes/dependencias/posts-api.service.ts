import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postInterface } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(private httP: HttpClient) {}

  getPosts(): Observable<Array<postInterface>> {
    return this.httP.get<Array<postInterface>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
