import React, {
  FC, useState, useEffect, ChangeEvent, KeyboardEvent,
} from 'react';
import { getPosts } from '../../api/api';
import './posts.scss';
import { useLocalStorage } from '../../hooks/useLocaleStorage';
import { Loader } from '../Loader';
import { PostsList } from '../PostList';
import { Post } from '../../types/Post';
import { Username } from '../Username';
import { idGenarate } from '../../helper/helper';

export const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [text, setText] = useLocalStorage('text', '');
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [username, setUserName] = useState('');
  const [appliedUsername, setAppliedUsername] = useLocalStorage('username', '');

  const deletePostHandler = (postID: number) => {
    setPosts(prevstate => prevstate.filter(el => el.postId !== postID));
  };

  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const appliedHandler = () => {
    if (username) {
      setAppliedUsername(username);
    }
  };

  const addPost = () => {
    if (!text) {
      setError(true);
      setErrorMessage('Please write some text to post it!');

      return;
    }

    const post: Post = {
      user: {
        username: appliedUsername,
        id: idGenarate(),
      },
      id: idGenarate(),
      body: text,
      postId: idGenarate(),
    };

    setPosts(prevState => [...prevState, post]);
    setText('');
  };

  const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addPost();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorMessage('');
    }, 3000);
  }, [error]);

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then(res => {
        setPosts(res.comments);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!appliedUsername) {
    return (
      <Username
        onChange={usernameHandler}
        onClick={appliedHandler}
        username={username}
      />
    );
  }

  return (
    <div className="posts">
      { isLoading ? (
        <Loader />
      ) : (
        <PostsList posts={posts} onClick={deletePostHandler} />
      )}

      {error && <p className="posts__error">{errorMessage}</p>}

      <div className="posts__addPost">
        <textarea
          className="posts__addPost-textarea"
          name="addPost"
          id="addPost"
          cols={30}
          rows={10}
          placeholder="Write some post...."
          value={text}
          onChange={textChangeHandler}
          onKeyDown={(e) => onKeyPress(e)}
          autoComplete="off"
        />

        <button
          type="button"
          className="posts__addPost-button"
          onClick={addPost}
          disabled={error}
        >
          Send
        </button>
      </div>
    </div>
  );
};
