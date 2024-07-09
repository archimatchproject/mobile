import React from 'react';

import { useSoftKeyboardEffect } from '@/core/keyboard';
import type { LoginFormProps } from '@/modules/login/login-form-supplier';
import { LoginForm } from '@/modules/login/login-form-supplier';
import { FocusAwareStatusBar } from '@/shared/components';

export default function Login() {
  useSoftKeyboardEffect();

  const onSubmit: LoginFormProps['onSubmit'] = () => {};
  return (
    <>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </>
  );
}
