<script setup lang="ts">
import { ref } from 'vue'
import { getBannerApi } from '../../services/index'
import type { BannerItem } from '../../services/type'

const title = ref('标题11111')
const banners = ref<BannerItem[]>([])

const getBanner = async () => {
  try {
    const res = await getBannerApi()
    banners.value = res.data.banners
  } catch(e) {
    console.log(e)
  }
}

getBanner()
</script>

<template>
  <view class="content">
    <view class="title">{{ title }}</view>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.targetId">
        <image mode="widthFix" :src="item.imageUrl" />
      </swiper-item>
    </swiper>
  </view>
</template>


<style lang="scss" scoped>
.content {
  .title {
    color: red;
  }
}
</style>
