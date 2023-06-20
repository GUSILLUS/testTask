import React, { FC } from 'react';
import { Post } from '../../types/Post';
import { PostComponent } from '../PostComponent/PostComponent';

import './postList.scss';

type Props = {
  posts: Post[] | [];
  onClick: (postID: number) => void;
};

export const PostsList: FC<Props> = ({ posts, onClick }) => (
  <ul className="postsList">
    {posts.map((post: Post) => (
      <li key={post.id}>
        <PostComponent post={post} onClick={onClick} />
      </li>
    ))}
  </ul>
);
