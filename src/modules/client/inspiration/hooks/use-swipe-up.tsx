import { useFormStepper } from '@/shared';

import type { InspirationRequestType } from '../types';

export const useSwipeUp = () => {
  const { onHandleNext } = useFormStepper<InspirationRequestType>();

  const onSubmit = () => {
    onHandleNext();
  };

  return {
    onHandleNext,
    onSubmit,
  };
};