import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { PostActions } from 'src/app/state/blogpost/actions';
import { getPosts } from 'src/app/state/blogpost/blogpost.selectors';
import { State } from 'src/app/state/blogpost/blogpost.state';

@Component({
  selector: 'bpt-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  @Input() postId!: number;

  protected post$ = this.store.select(getPosts)
    .pipe(map((allPosts) => allPosts[this.postId]));

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(PostActions.loadPost({ id: this.postId }));
  }
}
