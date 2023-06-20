import React, { FC } from 'react';
import { Post } from '../../types/Post';

import './postComponent.scss';

type Props = {
  post: Post;
  onDelete: (postID: number) => void;
};

export const PostComponent: FC<Props> = ({ post, onDelete }) => {
  const { user, body, postId } = post;
  const { username } = user;

  const firstLetter = username.split(' ').map(el => el.slice(0, 1)).join('');

  const deletePostHandler = () => {
    onDelete(postId);
  };

  return (
    <li className="post">
      <div className="post__username--firs-letter">{firstLetter}</div>
      <div className="post__username">{username}</div>
      <p className="post__text">{body}</p>
      <button
        className="post__delete"
        type="button"
        onClick={deletePostHandler}
      >
        &#10006;
      </button>
    </li>
  );
};
