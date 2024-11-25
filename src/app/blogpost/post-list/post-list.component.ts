import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { Store } from '@ngrx/store';
import { PostActions } from 'src/app/state/blogpost/actions';
import { getPosts } from 'src/app/state/blogpost/blogpost.selectors';
import { State } from 'src/app/state/blogpost/blogpost.state';

@Component({
  selector: 'bpt-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  protected posts$ = this.store.select(getPosts);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(PostActions.loadPosts());
  }

}
