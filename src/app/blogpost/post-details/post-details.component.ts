import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostActions } from 'src/app/state/blogpost/actions';
import { getPostById } from 'src/app/state/blogpost/blogpost.selectors';
import { State } from 'src/app/state/blogpost/blogpost.state';
import { Post } from '../models';

@Component({
  selector: 'bpt-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  protected post$!: Observable<Post>;

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.params['id'];

    this.store.dispatch(PostActions.loadPost({ id: postId }));

    this.post$ = this.store.select(getPostById(postId));
  }
}
