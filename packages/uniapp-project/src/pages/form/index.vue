<template>
  <LayoutPage>

    <uni-card is-full>
      <uni-forms ref="formRef" :modelValue="formData" :rules="rules">
        <FormItem required label="姓名" name="name">
          <uni-easyinput type="text" v-model="formData.name" />
        </FormItem>
        <view style="margin-top: 70vh">
          <FormItem required label="年龄" name="age">
            <uni-easyinput type="text" v-model="formData.age" />

          </FormItem>
        </view>
        <view style="margin-top: 70vh">
          <FormItem required label="兴趣1" name="hobby">
            <uni-easyinput type="text" v-model="formData.hobby" />
          </FormItem>
        </view>
      </uni-forms>
    </uni-card>

    <template #footer>
      <view class="page-footer">
        <button type="primary" @click="submitForm">提交</button>
      </view>
    </template>
  </LayoutPage>
</template>

<script setup lang="ts">
import LayoutPage from '@/components/layout-page.vue'
import { useForm } from '@/hooks/form'
import FormItem from '@/components/form-item.vue'
import { ref } from 'vue'


const formData = ref({
  name: '',
  age: '',
  hobby: ''
})

const rules = {
  name: {
    rules: [
      {
        required: true,
        errorMessage: '请输入姓名',
      }
    ]
  },
  age: {
    rules: [
      {
        required: true,
        errorMessage: '请输入年龄',
      }
    ]
  },
  hobby: {
    rules: [
      {
        required: true,
        errorMessage: '请输入兴趣',
      }
    ]
  },
}

const { formRef, validate } = useForm()
const submitForm = async () => {
  try {
    const model = await validate()
    console.log(model)
  } catch (error) {
    console.error('表单错误', error)
  }
}
</script>

<style scoped lang="scss">
.page-footer {
  display: flex;
  background-color: #f8f8f8;

  button {
    flex: 1;
    margin: 10rpx;
  }
}
</style>