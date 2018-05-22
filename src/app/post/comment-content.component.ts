import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-content',
  template: `
  <div class="card text-white bg-primary mb-3">
  <div class="card-body">
    <p class="card-text">{{comment}}</p>
  </div>
  </div>
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
