import { Component, OnInit } from '@angular/core';
import { postInterface } from './post.interface';
import { PostsApiService } from './posts-api.service';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
})
export class DependenciasComponent implements OnInit {
  posts: postInterface[] = [];

  constructor(private postService: PostsApiService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe({
      next: (res: postInterface[]) => {
        this.posts = res;
      },
    });
  }
}
