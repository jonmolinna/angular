import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { postInterface } from './post.interface';
import { PostsApiService } from './posts.api.service';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
})
export class DependenciasComponent implements OnInit {
  posts: postInterface[] = [];

  private postService = inject(PostsApiService);

  constructor() {
    // Nueva forma de usar onDestroy
    inject(DestroyRef).onDestroy(() => {
      console.log('Se destruyo el componente');
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (response: postInterface[]) => {
        this.posts = response;
      },
    });
  }
}
