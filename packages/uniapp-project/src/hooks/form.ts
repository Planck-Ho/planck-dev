import { inject, ref } from 'vue';
import type { UniFormsInstance } from '@uni-helper/uni-ui-types';
import { useFormErrorMessage } from '@/plugin/form';

export function useForm() {
  const formRef = ref<UniFormsInstance>();

  const { setErrorMessages } = useFormErrorMessage();

  const validate = (keepItem?: Array<string>) => {
    if (!formRef.value) return Promise.reject('formRef is undefined');

    return (formRef.value?.validate?.(keepItem) as Promise<void>).catch(
      (errs) => {
        setErrorMessages([...errs]);
        return Promise.reject(errs);
      }
    );
  };
  return {
    formRef,
    validate,
  };
}
