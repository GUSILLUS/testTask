import React, { FC, ChangeEvent } from 'react';

import './username.scss';

type Props = {
  username: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export const Username: FC<Props> = ({ onChange, onClick, username }) => (
  <label htmlFor="username" className="username">
    <input
      type="text"
      id="username"
      placeholder="Please write your username"
      value={username}
      onChange={onChange}
      className="username__input"
      autoComplete="off"
    />

    <button
      type="button"
      disabled={!username}
      onClick={onClick}
      className="username__button"
    >
      Apply
    </button>
  </label>
);
