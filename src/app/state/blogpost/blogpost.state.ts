import { Post } from 'src/app/blogpost/post';
import * as AppState from '../app.state';

export interface BlogpostState {
    posts: Post[];
}

export interface State extends AppState.State {
    blogpost: BlogpostState;
}