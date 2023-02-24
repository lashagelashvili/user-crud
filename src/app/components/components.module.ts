import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { SuccessComponent } from './messages/success/success.component';
import { ErrorComponent } from './messages/error/error.component';

@NgModule({
  declarations: [
    UserPostsComponent,
    UserListComponent,
    PostEditComponent,
    SuccessComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [
    UserPostsComponent,
    UserListComponent,
    PostEditComponent,
    SuccessComponent,
    ErrorComponent,
  ],
})
export class ComponentsModule {}
