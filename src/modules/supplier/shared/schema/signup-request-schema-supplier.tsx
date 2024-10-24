import { z } from 'zod';

import {
  dateValidation,
  emailValidation,
  fieldValidation,
  phoneValidation,
  specialityValidation,
  timeValidation,
} from '@/shared/validations';

export const SignupFormSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  city: fieldValidation,
  architectSpeciality: specialityValidation,
  date: dateValidation,
  timeSlot: timeValidation,
});
export const FirstConnectionSchema = z.object({
  firstName: fieldValidation,
  lastName: fieldValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  address: fieldValidation,
  city: fieldValidation,
});
export const SpecialityFormSchema = z.object({
  architectSpeciality: specialityValidation,
});
