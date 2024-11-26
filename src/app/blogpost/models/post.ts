import { PostComment } from './post-comment';

export interface Post {
  id: number | null;
  userId: number;
  title: string;
  body: string;

  comments: PostComment[] | null;
}
