import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './messages/error/error.component';
import { SuccessComponent } from './messages/success/success.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:id/posts', component: UserPostsComponent },
  { path: 'user/:id/:post/edit', component: PostEditComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
