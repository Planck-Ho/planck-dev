<template>
  <div style="display: flex; align-items: center">
    <h1>点击按钮查看大图：</h1>
    <el-button type="primary" @click="preview('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')">查看大图</el-button>
  </div>
  <div style="display: flex; align-items: center">
    <h1>点击链接查看大图：</h1>
    <el-link type="primary" @click="preview('https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg')">https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg</el-link>
  </div>
</template>

<script setup lang="ts">
import { preview } from '@planckdev/element-plus/utils'

</script>

