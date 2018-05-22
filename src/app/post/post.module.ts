import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddCommentComponent } from './add-comment.component';
import { CommentListComponent } from './comment-list.component';
import { CommentContentComponent } from './comment-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    CreatePostComponent,
    PostHomeComponent,
    PostContentComponent,
    PostListComponent,
    AddCommentComponent,
    CommentListComponent,
    CommentContentComponent
  ]
})
export class PostModule { }
