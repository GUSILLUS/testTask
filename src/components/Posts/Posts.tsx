import React, {
  FC, useState, useEffect, ChangeEvent, KeyboardEvent,
} from 'react';
import { getPosts } from '../../api/api';
import './posts.scss';
import { useLocalStorage } from '../../hooks/useLocaleStorage';
import { Loader } from '../Loader';
import { PostsList } from '../PostList';
import { Post } from '../../types/Post';
import { idGenerate } from '../../helper/helper';
import { ErrorMessage } from '../ErrorMessage';

type Props = {
  userName: string;
};

export const Posts: FC<Props> = ({ userName }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setText] = useLocalStorage('text', '');
  const [isLoading, setIsLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const deletePostHandler = (postID: number) => {
    setPosts(prevstate => prevstate.filter(el => el.postId !== postID));
  };

  const textChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const addPost = () => {
    if (!text) {
      setErrorMessage('Please write some text to post it!');

      return;
    }

    const post: Post = {
      user: {
        username: userName,
        id: idGenerate(),
      },
      id: idGenerate(),
      body: text,
      postId: idGenerate(),
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
    const timer = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  useEffect(() => {
    getPosts()
      .then(res => {
        setPosts(res.comments);
      })
      .catch(res => setErrorMessage(res.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="posts">
      { isLoading ? (
        <Loader />
      ) : (
        <PostsList posts={posts} onDelete={deletePostHandler} />
      )}

      {errorMessage && <ErrorMessage message={errorMessage} />}

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
          onKeyDown={onKeyPress}
        />

        <button
          type="button"
          className="posts__addPost-button"
          onClick={addPost}
          disabled={errorMessage !== null}
        >
          Send
        </button>
      </div>
    </div>
  );
};
