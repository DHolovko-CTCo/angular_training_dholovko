import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs';

import { PostActions } from 'src/app/state/blogpost/actions';
import { getPosts } from 'src/app/state/blogpost/blogpost.selectors';
import { State } from 'src/app/state/blogpost/blogpost.state';

@Component({
  selector: 'bpt-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  protected post$ = this.route.paramMap.pipe(
    filter((params) => params.has('id')),
    map((params) => +params.get('id')!),
    distinctUntilChanged(),
    switchMap((postId) => {
      this.store.dispatch(PostActions.loadPost({ id: postId }));
      return this.store
        .select(getPosts)
        .pipe(map(allPosts => allPosts[postId]));
    })
  );

  constructor(private store: Store<State>, private route: ActivatedRoute) {}
}
