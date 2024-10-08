import type { z } from 'zod';

import type { SocialLinksSchema } from '@/shared/validations';

import type {
  BioSchema,
  ChangePasswordFormSchema,
  CompanyInformationSchema,
  EmailSchema,
  PhoneNumberSchema,
} from '../schemas';
import type {
  supplierProfileInfoSchema,
  supplierSocialMediaSchema,
} from '../schemas/profile-info-schema';

export type ResetPassFormProfileType = z.infer<typeof ChangePasswordFormSchema>;
export type supplierProfileInfoType = z.infer<typeof supplierProfileInfoSchema>;
export type supplierSocialMediaType = z.infer<typeof supplierSocialMediaSchema>;
export type EmailFormType = z.infer<typeof EmailSchema>;
export type PhoneFormType = z.infer<typeof PhoneNumberSchema>;
export type BioFormType = z.infer<typeof BioSchema>;
export type CompanyInformationFormType = z.infer<
  typeof CompanyInformationSchema
>;
export type SocialLinksFormType = z.infer<typeof SocialLinksSchema>;

export type SocialLink = {
  Icon: React.ComponentType;
  name: 'facebook' | 'website' | 'instagram';
};
export type Collection = {
  id: number;
  title: string;
  categoryLabel: string;
  products: Product[];
  appearance: 'Petite' | 'Grande';
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  productImages: [
    {
      id: number;
      image: string;
    }
  ];
  collectionCategory: string;
  collectionTitle: string;
  order: 0;
  display: false;
};
