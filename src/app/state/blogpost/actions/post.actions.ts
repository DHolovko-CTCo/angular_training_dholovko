import { Post } from '../../../blogpost/models/post';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Posts Page] Load All Posts');

export const loadPost = createAction(
  '[Post Page] Load Post By Id',
  props<{ id: number }>()
);

export const loadPostsSuccess = createAction(
  '[Post API] Load All Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostSuccess = createAction(
  '[Post API] Load Post By Id Success',
  props<{ post: Post }>()
);
