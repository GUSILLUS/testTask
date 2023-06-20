import { User } from './User';

export interface Post {
  user: User;
  id: number;
  body: string;
  postId: number;
}
