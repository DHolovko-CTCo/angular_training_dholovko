import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { BlogpostService } from 'src/app/blogpost/blogpost.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostApiActions, PostPageActions } from './actions';

@Injectable()
export class BlogpostEffects {
  constructor(
    private actions$: Actions,
    private blogpostService: BlogpostService
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostPageActions.loadPosts),
      switchMap(() =>
        this.blogpostService.getPosts().pipe(
          map((posts) => PostApiActions.loadPostsSuccess({ posts }))
          // maybe implement something for err handling later
          // catchError(error => of(PostApiActions.loadPostsFailure({ error }))
        )
      )
    );
  });
}
