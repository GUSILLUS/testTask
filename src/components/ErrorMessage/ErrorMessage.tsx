import React, { FC } from 'react';

import './errorMessage.scss';

type Props = {
  message: string;
};

export const ErrorMessage: FC<Props> = ({ message }) => (
  <div className="errorMessage">
    <p className="errorMessage__text">{message}</p>
  </div>
);
