<template>
  <div class="test-container">
    <el-button @click="showPop">测试11</el-button>

    fdfd Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem
    totam odio, corporis doloribus repudiandae quod a natus iste itaque iusto
    illo aliquid vel! Deleniti repellendus pariatur vitae possimus id.

    <el-button @click="showPop2">测试2</el-button>

    <div style="margin-top: 100vh"></div>
    <div style="padding-bottom: 10vh"></div>
  </div>
</template>

<script setup lang="ts">
import { popconfirm } from '@/utils/popconfirm'

const showPop = async (e: MouseEvent) => {
  await popconfirm(e, {
    title: '是否删除'
  })
  console.log('确定---确定')
}
const showPop2 = async (e: MouseEvent) => {
  await popconfirm(e, {
    title: '是否删除???????'
  })
  console.log('awaitawait确定---确定')
}
</script>

<style scoped>
.test-container {
  margin-top: 200px;
}
</style>
