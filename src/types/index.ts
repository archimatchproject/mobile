import type { SubmitHandler } from 'react-hook-form';
import type * as z from 'zod';

import type { LoginFormSchema } from '@/validations';

export type LoginFormType = z.infer<typeof LoginFormSchema>;
export type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>;
};
