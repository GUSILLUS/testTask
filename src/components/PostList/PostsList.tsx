import React, { FC } from 'react';
import { Post } from '../../types/Post';
import { PostComponent } from '../PostComponent/PostComponent';

import './postList.scss';

type Props = {
  posts: Post[] | [];
  onDelete: (postID: number) => void;
};

export const PostsList: FC<Props> = ({ posts, onDelete }) => (
  <ul className="postsList">
    {posts.map((post: Post) => (
      <PostComponent post={post} onDelete={onDelete} key={post.id} />
    ))}
  </ul>
);
