import { provide, inject, getCurrentInstance, shallowRef } from 'vue';
import type { InjectionKey, Ref, UnwrapRef } from 'vue';

const injectionKey: InjectionKey<ReturnType<typeof useLayoutPageProvide>> =
  Symbol('LayoutPage');

export function useLayoutPageProvide() {
  const instance = getCurrentInstance();

  const getContentClientRect = async () => {
    return new Promise<UniApp.NodeInfo>((resolve, reject) => {
      if (!instance?.proxy) {
        return reject('instance is null');
      }
      const query = uni.createSelectorQuery().in(instance.proxy);

      query
        .select('.layout-page-content')
        .boundingClientRect((data) => {
          if (Array.isArray(data)) {
            data = data[0];
          }
          resolve(data);
        })
        .exec();
    });
  };

  const obj = {
    getContentClientRect,
  };
  provide(injectionKey, obj);
  return obj;
}

export function useLayoutPageInject() {
  return inject(injectionKey, null);
}
