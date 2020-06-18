import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailFiel = getByPlaceholderText('E-mail');
    const passwordFiel = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailFiel, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordFiel, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
  });
});
