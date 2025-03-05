# uni-app 小程序表单校验错误自动滚动到错误位置

# 前言

- 表单校验错误时，自动滚动到第一个错误的位置，以便用户快速定位到错误的表单项，可提升用户体验
- 以下是基于`uni-ui组件`实现的方案

# 效果展示

# 使用

1、在`main.ts`中引入`FormPlugin`函数

```ts
import { createSSRApp } from 'vue';
import App from './App.vue';
import { FormPlugin } from './plugin/form';

export function createApp() {
  const app = createSSRApp(App);
  app.use(FormPlugin); // 注册插件
  return {
    app,
  };
}

```

2、在页面组件中使用

注意需要`LayoutPage`、`FormItem`组件，配合`useForm` hook使用：

```xml
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
```

# 实现思路

- 用一个`全局响应式变量`保存表单错误消息, 表单项监听这个变量的变化
- 当表单校验失败时，将错误消息保存到这个变量中
- 通过表单项的`name`属性和错误消息的`key`字段判断哪个表单项有错误
- 在滚动条 0 位置设置一个`锚点`，当有错误时，通过表单项的位置和锚点的位置计算出滚动距离，然后滚动到错误的位置

# 表单错误消息示例

```json
[
  {
    "name": "name",
    "errorMessage": "请输入姓名"
  },
  {
    "name": "age",
    "errorMessage": "请输入年龄"
  },
  {
    "name": "hobby",
    "errorMessage": "请输入兴趣"
  }
]
```

# 滚动距离计算原理

# 核心逻辑流程图

- 注1：重置错误消息可以防止重复执行，并且释放内存变量
- 注2：计算目标滚动距离原理如下：

# 总结


# 源码地址

# 结语
感谢您耐心阅读这篇文章。如果您觉得内容对您有帮助或启发，请不吝点赞支持。如果您发现文章中的任何错误或需要改进的地方，欢迎您指正批评。
