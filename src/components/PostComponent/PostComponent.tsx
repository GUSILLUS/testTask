import React, { FC } from 'react';
import { Post } from '../../types/Post';

import './postComponent.scss';

type Props = {
  post: Post;
  onClick: (postID: number) => void;
};

export const PostComponent: FC<Props> = ({ post, onClick }) => {
  const { user, body, postId } = post;
  const { username } = user;

  const firstLetter = username.split(' ').map(el => el.slice(0, 1)).join('');

  return (
    <div className="post">
      <div className="post__username--firs-letter">{firstLetter}</div>
      <div className="post__username">{username}</div>
      <p className="post__text">{body}</p>
      <button
        className="post__delete"
        type="button"
        onClick={() => onClick(postId)}
      >
        &#10006;
      </button>
    </div>
  );
};
