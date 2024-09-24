import React from 'react';
import { View } from 'react-native';

import type { TxKeyPath } from '@/core';
import { translate } from '@/core';

import StepperButton from './stepper-button';

type ButtonsProps = {
  previous: { handlePreviousStep: (() => void) | undefined; label: TxKeyPath };
  next: {
    handleSubmit: (() => Promise<void>) | undefined;
    label: TxKeyPath;
  };
  style?: string;
};

export default function StepButtons({ previous, next, style }: ButtonsProps) {
  return (
    <View className={`my-2 flex flex-row justify-center gap-2 ${style}`}>
      <StepperButton
        width="w-[45%]"
        alternativeBg="bg-secondary-btn"
        alternativeTextStyle="color-primary-txt"
        label={translate(previous.label)}
        onPressHandler={previous.handlePreviousStep}
      />

      <StepperButton
        width="w-[45%]"
        onPressHandler={next.handleSubmit}
        label={translate(next.label)}
      />
    </View>
  );
}
