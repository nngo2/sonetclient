import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IPostAppState } from './state';

export const RECENT_POST = 'RECENT_POST';
export const POST_COMMENTS = 'POST_COMMENTS';

@Injectable()
export class PostActions {

    constructor(private ngRedux: NgRedux<IPostAppState>) { }

    recentPostsAction(posts) {
        this.ngRedux.dispatch({
            type: RECENT_POST,
            data: posts
        });
    }

    postCommentsAction(comments) {
        this.ngRedux.dispatch({
            type: POST_COMMENTS,
            data: comments
        });
    }
}
