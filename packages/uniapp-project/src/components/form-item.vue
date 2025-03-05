<template>
  <view class="my-form-item">
    <uni-forms-item v-bind="props">
      <slot></slot>
    </uni-forms-item>
  </view>
</template>

<script setup lang="ts">
import type { UniFormsItemProps } from '@uni-helper/uni-ui-types'
import { useLayoutPageInject } from '@/hooks/layout-page'
import { getCurrentInstance, watch } from 'vue';
import { useFormErrorMessage } from '@/plugin/form';

const props = defineProps<UniFormsItemProps>()

const instance = getCurrentInstance();


const layoutPageInject = useLayoutPageInject()
const { errorMessages, setErrorMessages, isScrolling, setScrolling } = useFormErrorMessage()

const scrollToError = async () => {

  if (!layoutPageInject || !instance) return
  setScrolling(true)
  const point = await layoutPageInject.getContentClientRect()

  const query = uni.createSelectorQuery().in(instance.proxy);
  query
    .select('.my-form-item')
    .boundingClientRect((data) => {
      if (Array.isArray(data)) {
        data = data[0]
      }
      if (typeof data.top === 'number' && typeof point.top === 'number') {
        const scrollTop = Math.abs(Number.parseInt(data.top.toString()) - Number.parseInt(point.top.toString()))
        uni.pageScrollTo({
          scrollTop,
          duration: 100,
          complete() {
            setScrolling(false)
          }
        })
      } else {
        setScrolling(false)
      }

    })
    .exec()
}



watch(() => errorMessages.value, val => {
  if (!val?.length || isScrolling.value) return

  let formItemName = Array.isArray(props.name) ? props.name.join('#') : props.name
  if (!formItemName) return
  formItemName = formItemName.replaceAll('.', '#')
  const isActive = val.some(item => {
    if (item.key.startsWith('_formdata_')) {
      return item.key === `_formdata_#${formItemName}`
    }
    return item.key === formItemName
  })
  if (isActive) {
    setErrorMessages([])
    scrollToError()
  }
})
</script>
