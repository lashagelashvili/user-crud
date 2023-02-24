import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserPosts } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(id: number): Observable<UserPosts[]> {
    return this.http.get<UserPosts[]>(
      `https://jsonplaceholder.typicode.com/user/${id}/posts`
    );
  }
}
