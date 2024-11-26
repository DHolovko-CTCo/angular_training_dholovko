import { Post } from 'src/app/blogpost/models';
import * as AppState from '../app.state';

export interface BlogpostState {
  posts: { [id: number]: Post };
}

export interface State extends AppState.State {
  blogpost: BlogpostState;
}
