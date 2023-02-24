import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/messages/error/error.component';
import { SuccessComponent } from './components/messages/success/success.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:id/posts', component: UserPostsComponent },
  { path: 'user/:id/:post/edit', component: PostEditComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
