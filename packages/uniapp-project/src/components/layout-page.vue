<template>
  <view class="layout-page-container">
    <!-- 页头 -->
    <view class="layout-page-header">

      <slot name="header"></slot>
    </view>
    <!-- 页面内容 -->
    <view class="layout-page-content">
      <slot></slot>
    </view>
    <!-- 页脚 -->
    <view class="layout-page-footer">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useLayoutPageProvide } from '@/hooks/layout-page'

useLayoutPageProvide()
</script>

<style lang="scss">
.layout-page-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100%;
}

.layout-page-content {
  flex: 1;
  box-sizing: border-box;
}

.layout-page-header,
.layout-page-footer {
  flex-shrink: 0;
  position: sticky;
  width: 100%;
  z-index: 999; 
}

.layout-page-header {
  top: 0;
  background-color: #fff;
}

.layout-page-footer {
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff;
}
</style>