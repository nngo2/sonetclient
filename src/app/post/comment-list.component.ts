import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  template: `
  <div class="card" *ngFor="let comment of comments">
    <app-comment-content [comment]="comment"></app-comment-content>
  </div>
  `,
  styles: []
})
export class CommentListComponent implements OnInit {
  @Input() comments: any[];

  constructor() { }

  ngOnInit() {
    if (this.comments) {
      console.dir(this.comments);
    }
  }

}
