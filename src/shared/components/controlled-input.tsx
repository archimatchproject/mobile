import * as React from 'react';
import {
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useController,
} from 'react-hook-form';

import type { TxKeyPath } from '@/core';

import { Input, type NInputProps } from './input';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;
export type CreateProfileType = {
  name: string;
  data: string;
};
export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
  required?: boolean;
  disabled?: boolean;
  labelStyle?: string;
  forcedValue?: string;
  choiceValue?: string;
  inputAreaType?: 'textInput' | 'textArea';
  handleOnChange?: ({ name, data }: CreateProfileType) => void;
  icon?: React.ReactNode;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const {
    name,
    control,
    rules,
    handleOnChange,
    labelStyle,
    disabled = false,
    inputAreaType = 'textInput',
    required = false,
    autoCapitalize = 'none',
    icon,
    forcedValue,
    choiceValue,
    ...inputProps
  } = props;

  const { field, fieldState } = useController({ control, name, rules });
  const error = fieldState.error?.message as TxKeyPath | undefined;

  const [inputValue, setInputValue] = React.useState<string | undefined>(
    forcedValue || (field.value as string)
  );

  const { onChange, value } = field;

  React.useEffect(() => {
    if (choiceValue && value !== choiceValue) {
      setInputValue(choiceValue);
      onChange(choiceValue);
    }
  }, [choiceValue, value, onChange]);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    onChange(newValue);
    if (handleOnChange) {
      handleOnChange({ name, data: newValue });
    }
  };

  return (
    <Input
      icon={icon}
      disabled={disabled}
      required={required}
      inputAreaType={inputAreaType}
      labelStyle={labelStyle}
      ref={field.ref}
      autoCapitalize={autoCapitalize}
      onChangeText={handleInputChange}
      value={inputValue || ''}
      {...inputProps}
      error={error}
    />
  );
}
