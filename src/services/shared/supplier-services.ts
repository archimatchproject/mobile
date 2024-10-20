import type { AxiosResponse } from 'axios';
import { isAxiosError } from 'axios';

import { client } from '@/api';
import type { SpecialityTypeResponse } from '@/api/auth';
import type { ProfileSocialLinksFormData } from '@/api/profileSettings/type';
import type { createProductRequestData } from '@/api/supplier/catalogue/types';
import type { FirstConnectionRequest } from '@/api/supplier/createAccount/types';
import type {
  createCollectionRequestData,
  SupplierProfileInfoListType,
  SupplierProfileInfoType,
  UpdateVisibilityRequest,
} from '@/api/supplier/profile/types';
import type {
  BioFormType,
  Collection,
  CompanyInformationFormType,
} from '@/modules/supplier/profile/type';
import { showErrorMessage } from '@/shared/components';

export async function getSupplierProfile(): Promise<SupplierProfileInfoType> {
  const url = '/api/users/supplier/get-profile/';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          `API request failed with status ${error.response?.status}`
        );
      } else {
        throw new Error(
          `API request failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`
        );
      }
    });
}

export async function getSpecialityTypes(): Promise<SpecialityTypeResponse[]> {
  const url = '/api/users/supplier/speciality-types/';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      if (isAxiosError(error)) {
        throw new Error(
          `API request failed with status ${error.response?.status}`
        );
      } else {
        throw new Error(
          `API request failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`
        );
      }
    });
}

export async function postFirstConnection(
  request: FirstConnectionRequest
): Promise<AxiosResponse> {
  const url = '/api/users/supplier/first-connection/';
  return client.post(url, request);
}

export async function putUpdateCoverPicture(
  request: FormData
): Promise<AxiosResponse> {
  const url = '/api/users/supplier/update-cover-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function putUpdateProfilePicture(
  request: FormData
): Promise<AxiosResponse> {
  const url = '/api/users/supplier/update-profile-image/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function updateSupplierVideoAsync(
  request: FormData
): Promise<AxiosResponse> {
  const url = '/api/users/supplier/update-presentation-video/';
  return client.put(url, request, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function updateSupplierProfileAsync(
  formData: CompanyInformationFormType
): Promise<AxiosResponse> {
  const url = `/api/users/supplier/update-profile/`;
  return client.put(url, formData);
}

export async function updateSupplierBioAsync(
  formData: BioFormType
): Promise<AxiosResponse> {
  const url = `/api/users/supplier/update-bio/`;
  return client.put(url, formData);
}
export async function updateSocialLinkAsync(
  formData: ProfileSocialLinksFormData
): Promise<AxiosResponse> {
  const url = `/api/users/supplier/update-links/`;
  return client.put(url, formData);
}

export async function getSuppliersBySpecialityType(
  specialityId: number
): Promise<SupplierProfileInfoListType> {
  const url = `/api/users/supplier/get-all-suppliers?speciality_type=${specialityId}`;
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
}
export async function getCollections(): Promise<Collection[]> {
  const url = '/api/catalogue/collection';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
}

export async function getCollectionsCategories(): Promise<
  SpecialityTypeResponse[]
> {
  const url = '/api/users/supplier/speciality-types/';
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      showErrorMessage(error.response.data.errors[0].detail);
      throw error.response?.data || error.message;
    });
}

export async function createCollection(
  request: createCollectionRequestData
): Promise<AxiosResponse> {
  const url = '/api/catalogue/collection/create/';
  return client.post(url, request);
}

export async function deleteCollectionAsync(
  collectionId: string
): Promise<AxiosResponse> {
  const url = `/api/catalogue/collection/delete/${collectionId}/`;
  return client.delete(url);
}

export async function createProduct(
  request: createProductRequestData
): Promise<AxiosResponse> {
  const url = '/api/catalogue/product/create/';
  return client.post(url, request);
}

export async function deleteProductAsync(id: string): Promise<AxiosResponse> {
  const url = `/api/catalogue/product/delete/${id}/`;
  return client.delete(url);
}

export async function updateProductVisibilityRequestAsync(
  updateVisibilityData: UpdateVisibilityRequest
): Promise<AxiosResponse> {
  const url =
    '/api/catalogue/product/update-visibility/${updateVisibilityData.id}/';
  return client.put(url, { visibility: updateVisibilityData.visibility });
}

export async function getCollectionById(id: string): Promise<Collection> {
  const url = `/api/catalogue/collection/${id}`;
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data || error.message;
    });
}
