import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from 'src/app/state/blogpost/blogpost.selectors';
import { State } from 'src/app/state/blogpost/blogpost.state';
import { Post } from '../post';
import { PostPageActions } from 'src/app/state/blogpost/actions';

@Component({
  selector: 'bpt-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);

    this.store.dispatch(PostPageActions.loadPosts());
  }

}
