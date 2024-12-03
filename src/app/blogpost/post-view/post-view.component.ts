import { Component, Input } from '@angular/core';
import { Post } from '../models';

@Component({
  selector: 'bpt-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent {
  @Input() post!: Post;
}
