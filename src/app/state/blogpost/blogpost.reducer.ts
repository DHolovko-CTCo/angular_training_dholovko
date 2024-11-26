/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/blogpost/models';
import { PostActions } from './actions';
import { BlogpostState } from './blogpost.state';

const initialState: BlogpostState = {
  posts: [],
};

export const blogpostReducer = createReducer<BlogpostState>(
  initialState,
  on(PostActions.loadPostsSuccess, (state, action): BlogpostState => {
    return {
      ...state,
      posts: action.posts.reduce((acc, post) => {
        acc[post.id!] = post;
        return acc;
      }, {} as { [id: number]: Post }),
    };
  }),
  on(PostActions.loadPostSuccess, (state, action): BlogpostState => {
    return {
      ...state,
      posts: {
        ...state.posts,
        [action.post.id!]: action.post,
      },
    };
  })
);
