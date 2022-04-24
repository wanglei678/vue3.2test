<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus';
  // element 全局配置
  import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>

<style lang="less"></style>
