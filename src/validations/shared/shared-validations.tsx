import { z } from 'zod';

export const requiredValidation = z.string({
  message: 'validations.required',
});

export const emailValidation = z
  .string({ message: 'validations.required' })
  .email({ message: 'validations.invalid' })
  .max(100, { message: 'validations.email-max-length' });

export const passwordValidation = z
  .string({ message: 'validations.required' })
  .min(8, { message: 'validations.password-min-length' })
  .regex(/[a-z]/, { message: 'validations.password-lowercase' })
  .regex(/[A-Z]/, { message: 'validations.password-uppercase' })
  .regex(/[0-9]/, { message: 'validations.password-digit' })
  .regex(/[^a-zA-Z0-9]/, { message: 'validations.password-special-char' });

export const fieldValidation = z
  .string({ message: 'validations.required' })
  .min(3, { message: 'validations.field-min-length' })
  .max(50, { message: 'validations.field-max-length' })
  .regex(/^[a-zA-Z0-9_]+$/, { message: 'validations.field-shape' });