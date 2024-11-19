/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { PostApiActions } from './actions';
import { BlogpostState } from './blogpost.state';

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