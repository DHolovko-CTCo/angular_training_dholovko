import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { BlogpostService } from 'src/app/blogpost/blogpost.service';
import { PostActions } from './actions';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class BlogpostEffects {
  constructor(
    private actions$: Actions,
    private blogpostService: BlogpostService
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPosts),
      switchMap(() =>
        this.blogpostService.getPosts().pipe(
          map((posts) => PostActions.loadPostsSuccess({ posts }))
          // maybe implement something for err handling later
          // catchError(error => of(PostApiActions.loadPostsFailure({ error }))
        )
      )
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.loadPost),
      switchMap((action) =>
        this.blogpostService.getPost(action.id).pipe(
          switchMap((post) =>
            this.blogpostService.getPostComments(post.id!).pipe(
              map((comments) => ({
                ...post,
                comments,
              }))
            )
          ),
          map((post) => PostActions.loadPostSuccess({ post: post }))
        )
      )
    );
  });
}
