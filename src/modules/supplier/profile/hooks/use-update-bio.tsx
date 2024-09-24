import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useSupplierProfileApi } from '@/api/supplier/profile/use-profile';
import { useUpdateSupplierBioApi } from '@/api/supplier/profile/use-update-supplier-bio';
import { useCustomForm } from '@/core';
import { showSuccesMessage } from '@/shared/components';

import { BioSchema } from '../schemas';
import type { BioFormType } from '../type';

export const useUpdateBio = () => {
  const { handleSubmit, control, form, reset } = useCustomForm(BioSchema);
  const router = useRouter();
  const { data: supplier, isSuccess } = useSupplierProfileApi();

  useEffect(() => {
    if (isSuccess && supplier) {
      reset({
        bio: supplier?.bio,
      });
    }
  }, [isSuccess, supplier, reset]);

  const updateProfile = useUpdateSupplierBioApi();

  const onSubmit = (data: BioFormType) => {
    if (data.bio !== supplier?.bio) {
      updateProfile.mutate(data, {
        onSuccess: (response) => {
          showSuccesMessage(response.data.message);
          router.back();
        },
      });
    } else {
      router.back();
    }
  };
  return {
    control,
    form,
    reset,
    handleSubmit,
    onSubmit,
  };
};
