import { Post } from '../../../blogpost/post';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction(
  '[Posts Page] Load'
);