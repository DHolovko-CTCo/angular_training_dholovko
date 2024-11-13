/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { BlogpostState } from './blogpost.state';
import { PostApiActions, PostPageActions } from './actions';

const initialState: BlogpostState = {
    posts: []
};

export const blogpostReducer = createReducer<BlogpostState>(
    initialState,
    on(PostApiActions.loadPostsSuccess, (state, action): BlogpostState => {
        return {
            ...state,
            posts: action.posts
        }
    })
);