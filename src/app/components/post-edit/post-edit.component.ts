import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserPost } from '../../services/model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {
  private postId: number;

  postForm = new FormGroup({
    id: new FormControl(),
    userId: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    body: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.postId = this.route.snapshot.params['post'];

    this.userService
      .getPost(this.postId)
      .subscribe((data) => this.postForm.patchValue(data));
  }

  onSubmit() {
    this.userService
      .updatePost(this.postId, this.postForm.value as UserPost)
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
          state: { successMessage: 'Post has been edited successfully' },
        });
      });
  }
}
