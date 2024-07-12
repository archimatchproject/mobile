import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';

import { translate, useAuth } from '@/core';
import { Checkbox, ControlledInput, Text } from '@/shared/components';
import useCustomForm from '@/shared/hooks/use-custom-form';
import type { LoginFormProps, LoginFormType } from '@/types'; // Updated import
import { LoginFormSchema } from '@/validations';

import { Container } from '../shared';
import LoginButton from '../shared/login-button';

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { handleSubmit, control } = useCustomForm(LoginFormSchema);
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  const [checked, setChecked] = useState(true);

  const handleFormSubmit: SubmitHandler<LoginFormType> = (data) => {
    signIn({ access: 'access-token', refresh: 'refresh-token' });
    router.push('/(architect)/(private)');
    onSubmit(data);
  };

  return (
    <View className="flex w-full justify-center">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label={translate('login.email')}
        placeholder={translate('login.email')}
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label={translate('login.mdp')}
        placeholder={translate('login.mdp')}
        secureTextEntry={true}
      />
      <Container style="flex-row justify-between my-3">
        <Checkbox
          checked={checked}
          onChange={setChecked}
          accessibilityLabel="Se souvenir de moi"
          label={translate('login.souvenir')}
        />
        <Text className="font-lato text-xs font-semibold text-primary">
          {translate('login.mdpOublier')}
        </Text>
      </Container>
      <LoginButton
        type="button"
        label={translate('login.connectBtn')}
        loginFunction={handleSubmit(handleFormSubmit)}
        radius="rounded-lg"
        width="w-full"
        height="h-12"
        alternativeStyle="my-5"
      />
    </View>
  );
};
