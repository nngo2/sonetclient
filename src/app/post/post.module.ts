import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { PostContentComponent } from './post-content/post-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [CreatePostComponent, PostHomeComponent, PostContentComponent]
})
export class PostModule { }
