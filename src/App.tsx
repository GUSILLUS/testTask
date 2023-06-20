import React, { FC } from 'react';
import './App.scss';
import { Posts } from './components/Posts';

export const App: FC = () => {
  return (
    <div className="testTask">
      <Posts />
    </div>
  );
};
