import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { UserPost } from 'src/app/services/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  private userId: number;

  userPosts$: Observable<UserPost[]>;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];

    this.userPosts$ = this.userService
      .getUserPosts(this.userId)
      .pipe(tap(console.log));
  }

  onEdit(postId: number) {
    this.router.navigateByUrl(`user/${this.userId}/${postId}/edit`);
  }

  onDelete(postId: number) {
    this.userService
      .deletePost(postId)
      .pipe(
        catchError((err) => {
          this.router.navigate(['error'], {
            state: { errorMessage: err.message },
          });

          throw err;
        })
      )
      .subscribe((_) => {
        this.router.navigate(['success'], {
          state: { successMessage: 'Post has been deleted successfully' },
        });
      });
  }
}
