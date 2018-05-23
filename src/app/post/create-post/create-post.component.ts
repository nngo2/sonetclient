import { Component, OnInit } from '@angular/core';
import { IPost, IUser, PostActions } from '../../store';
import { AuthService, PostService, FileUploadService } from '../../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  content: string;
  fileToUpload: File = null;
  uploadedFile = '';

  constructor(private authService: AuthService, private postService: PostService,
    private postActions: PostActions, private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.content = '';
    this.uploadedFile = '';
    this.fileToUpload = null;
  }

  send(f) {
    const user: IUser = this.authService.getCurrentUser();
    const post: any = {
      username: user.login,
      time: new Date(),
      content: this.content,
      image: this.uploadedFile
    };

    if (f.valid) {
      // console.dir(f.value);
      this.postService.createContentPost(post).subscribe(
        data => {
          // console.dir(data.json());
          this.content = '';
          this.uploadedFile = '';
          this.fileToUpload = null;
          this.refreshData();
        },
        err => {
          // Observable.throw(err);
          console.log(err);
        }
      );
    }
  }

  refreshData() {
    this.postService.getRecentPosts(0).subscribe(
      data => {
        // console.dir(data.json());
        this.postActions.recentPostsAction(data.json());
      },
      err => {
        // Observable.throw(err);
        console.log(err);
      }
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(
      data => {
        console.log(data);
        this.uploadedFile = data['path'];
      }, error => {
        console.log(error);
      });
  }
}
