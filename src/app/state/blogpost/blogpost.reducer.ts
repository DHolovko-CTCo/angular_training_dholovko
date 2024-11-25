/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { PostActions } from './actions';
import { BlogpostState } from './blogpost.state';

const initialState: BlogpostState = {
    posts: []
};

export const blogpostReducer = createReducer<BlogpostState>(
    initialState,
    on(PostActions.loadPostsSuccess, (state, action): BlogpostState => {
        return {
            ...state,
            posts: action.posts
        }
    })
);