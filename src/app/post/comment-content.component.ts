import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-content',
  template: `
<!--  <div class="card text-dark bg-light mb-3"> -->
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p class="card-text">{{comment.content}}</p>
        <footer class="blockquote-footer">{{comment.username}} | {{comment.time | date:'yyyy-MM-dd HH:MM'}}</footer>
      </blockquote>
    </div>
<!--  </div> -->
  `,
  styles: []
})
export class CommentContentComponent implements OnInit {
  @Input() comment: any;
  constructor() { }

  ngOnInit() {
    console.dir(this.comment);
  }
}
