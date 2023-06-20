import React, { FC, useState, ChangeEvent } from 'react';
import './App.scss';
import { Posts } from './components/Posts';
import { useLocalStorage } from './hooks/useLocaleStorage';
import { Username } from './components/Username';

export const App: FC = () => {
  const [username, setUserName] = useState('');
  const [appliedUsername, setAppliedUsername] = useLocalStorage('username', '');

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const appliedHandler = () => {
    if (username) {
      setAppliedUsername(username);
    }
  };

  return (
    <div className="testTask">
      {appliedUsername ? (
        <Posts userName={appliedUsername} />
      ) : (
        <Username
          onChange={usernameHandler}
          onClick={appliedHandler}
          username={username}
        />
      )}
    </div>
  );
};
