import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { SuccessComponent } from './components/messages/success/success.component';
import { ErrorComponent } from './components/messages/error/error.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { BackArrowComponent } from './shared/components/back-arrow/back-arrow.component';
import { ReturnHomeComponent } from './shared/components/return-home/return-home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPostsComponent,
    SuccessComponent,
    ErrorComponent,
    PostEditComponent,
    BackArrowComponent,
    ReturnHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
