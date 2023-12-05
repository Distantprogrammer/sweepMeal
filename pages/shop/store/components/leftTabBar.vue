<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { goodsNavBar } from './mockData.js';
const emit = defineEmits(['changeLeftBar']);
const leftTabBarData = ref(goodsNavBar);
const isActiveIndex = ref(0);
const changeLeftBar = (item, index) => {
  isActiveIndex.value = index;
  emit('changeLeftBar', {item, index});
};
// onLoad() {
//     }
</script>

<template>
  <!-- 左侧菜单栏 -->
  <scroll-view class="leftTabBar" scroll-y :show-scrollbar="false" :scroll-with-animation="true">
    <div
      class="leftTabBar_item"
      :class="[
        isActiveIndex === index ? 'active' : '',
        isActiveIndex + 1 === index ? 'borderTopRightRadius' : '',
        isActiveIndex - 1 === index ? 'borderBottomRightRadius' : '',
      ]"
      v-for="(item, index) in leftTabBarData"
      :key="item.id"
      @click="changeLeftBar(item, index)"
    >
      <span class="span">{{ item.goodsClassName }}</span>
    </div>
  </scroll-view>
</template>

<style lang="scss" scoped>
.leftTabBar {
  width: 160rpx;
  height: 100%;
  background: rgba(245, 245, 245, 1);
  .leftTabBar_item {
    overflow: hidden;
    background: rgba(245, 245, 245, 1);
    position: relative;
    width: 160rpx;
    height: 120rpx;
    text-align: left;
    display: flex;
    align-items: center;
    // line-height: 120rpx;
    font-size: 26rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    color: rgba(102, 102, 102, 1);
    vertical-align: top;
    .span {
      margin: 0 10rpx 0 20rpx;
    }
  }
  .borderBottomRightRadius {
    border-bottom-right-radius: 20rpx;
  }
  .borderTopRightRadius {
    border-top-right-radius: 20rpx;
  }
  .active {
    font-size: 26rpx;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    background-color: #fff;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      width: 16rpx;
      height: 48rpx;
      border-radius: 200px;
      background: rgba(36, 147, 241, 1);
    }
  }
}
</style>
