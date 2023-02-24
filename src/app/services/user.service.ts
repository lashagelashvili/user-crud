import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPost } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(id: number): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(
      `https://jsonplaceholder.typicode.com/user/${id}/posts`
    );
  }

  getPost(id: number): Observable<UserPost> {
    return this.http.get<UserPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  updatePost(postId: number, post: UserPost): Observable<UserPost> {
    return this.http.patch<UserPost>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      post
    );
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
