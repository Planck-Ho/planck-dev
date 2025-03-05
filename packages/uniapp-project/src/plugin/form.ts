import { shallowRef, inject } from 'vue';
import type { InjectionKey, Plugin } from 'vue';

type ErrorMessage = {
  key: string;
  errorMessage: string;
};

type ErrorMessages = Array<ErrorMessage>;

function useFormErrorMessageProvide() {
  const errorMessages = shallowRef<ErrorMessages>([]);
  const setErrorMessages = (messages: ErrorMessages) => {
    errorMessages.value = messages;
  };
  const isScrolling = shallowRef(false)

  const setScrolling = (scrolling: boolean) => {
    isScrolling.value = scrolling;
  };
  return {
    setScrolling,
    isScrolling,
    errorMessages,
    setErrorMessages,
  };
}

const ErrorMessagesInjectionKey: InjectionKey<
  ReturnType<typeof useFormErrorMessageProvide>
> = Symbol('ErrorMessages');

export function useFormErrorMessage() {
  const errorMessagesInjection = inject(ErrorMessagesInjectionKey);
  if (!errorMessagesInjection) throw new Error('FormPlugin is not installed');

  return errorMessagesInjection;
}

export const FormPlugin = {
  install(app) {
    app.provide(ErrorMessagesInjectionKey, useFormErrorMessageProvide());
  },
} as Plugin;
