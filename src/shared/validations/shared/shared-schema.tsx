import { z } from 'zod';

import {
  dateValidation,
  emailValidation,
  fieldValidation,
  notRequiredValidationBoolean,
  passwordValidation,
  phoneValidation,
  requiredValidation,
  requiredValidationBoolean,
  requiredValidationNumber,
  timeValidation,
} from './shared-validations';

export const ConfirmPasswordSchema = z
  .object({
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'validations.confirm-password',
      path: ['confirmPassword'],
    }
  );

export const EmailSchema = z.object({
  email: emailValidation,
});

export const PasswordSchema = z.object({
  password: passwordValidation,
});

export const LoginFormSchema = z.object({
  email: emailValidation,
  password: requiredValidation,
});

export const SignupFormSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  architectIdentifier: fieldValidation, //architectIdentifierValidation
  architectSpeciality: requiredValidationNumber,
  date: dateValidation,
  timeSlot: timeValidation,
});
export const createAccountSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  architectIdentifier: fieldValidation, //matriculeValidation
});
export const SpecialityFormSchema = z.object({
  architectSpeciality: requiredValidationNumber,
});

export const DemoFormSchema = z.object({
  date: dateValidation,
  timeSlot: timeValidation,
});

export const OTPSchema = z.object({
  OTP: requiredValidation,
});

export const BasicInfoFormSchema = z.object({
  name: requiredValidation,
  lastName: requiredValidation,
  email: emailValidation,
  number: requiredValidation,
});

export const NotificationFormSchema = z.object({
  new: notRequiredValidationBoolean,
  activity: notRequiredValidationBoolean,
  newNavigator: notRequiredValidationBoolean,
});

export const AnnouncementFormSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  acceptTerms: requiredValidationBoolean,
  receiveQuotes: notRequiredValidationBoolean,
  speciality: requiredValidationNumber,
  needs: requiredValidationNumber,
  categories: requiredValidationNumber,
  properties: requiredValidationNumber,
});