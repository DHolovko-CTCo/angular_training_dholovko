import { Post } from '../../../blogpost/post';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadPostsSuccess = createAction(
  '[Post API] Load Success',
  props<{ posts: Post[] }>()
);