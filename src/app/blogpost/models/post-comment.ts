export interface PostComment {
  id: number | null;
  postId: number;
  name: string;
  email: string;
  body: string;
}
