<script setup lang="ts">
import { ref } from 'vue'
const title = ref('个人中心')


</script>

<template>
  <view class="content">
    <view class="title">{{ title }}</view>
  </view>
</template>


<style lang="scss" scoped>
.content {
  .title {
    color: red;
  }
}
</style>
