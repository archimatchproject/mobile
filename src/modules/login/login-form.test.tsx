import React from 'react';

import { cleanup, fireEvent, render, screen, waitFor } from '@/core/test-utils';
import type { LoginFormProps } from '@/types'; // Updated import path

import { LoginForm } from './login-form';

afterEach(cleanup);

const onSubmitMock: jest.Mock<LoginFormProps['onSubmit']> = jest.fn();

describe('LoginForm Form', () => {
  it('renders correctly', async () => {
    render(<LoginForm onSubmit={onSubmitMock} />);
    expect(await screen.findByText(/Sign in/i)).toBeOnTheScreen();
  });

  it('should display required error when values are empty', async () => {
    render(<LoginForm onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('login-button');
    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
    fireEvent.press(button);
    expect(await screen.findByText(/Email is required/i)).toBeOnTheScreen();
    expect(screen.getByText(/Password is required/i)).toBeOnTheScreen();
  });

  it('should display matching error when email is invalid', async () => {
    render(<LoginForm onSubmit={onSubmitMock} />);

    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.changeText(emailInput, 'yyyyy');
    fireEvent.changeText(passwordInput, 'test');
    fireEvent.press(button);

    expect(screen.queryByText(/Email is required/i)).not.toBeOnTheScreen();
    expect(await screen.findByText(/Invalid Email Format/i)).toBeOnTheScreen();
  });

  it('Should call LoginForm with correct values when values are valid', async () => {
    render(<LoginForm onSubmit={onSubmitMock} />);
    const eMail = 'example@gmail.com';
    const button = screen.getByTestId('login-button');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.changeText(emailInput, eMail); // Corrected email to match expected value
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(button);
    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });

    expect(onSubmitMock).toHaveBeenCalledWith(
      {
        email: eMail,
        password: 'password',
      },
      undefined
    );
  });
});
