<script setup>
import { ref } from 'vue'
import list from './components/list.vue'
const activateIndex = ref(0)
const handelClick = index => {
  activateIndex.value = index
}
const navList = ref([
  {
    name: '全部',
    id: 0,
  },
  {
    name: '待支付',
    id: 1,
  },
  {
    name: '待取餐',
    id: 2,
  },
  {
    name: '退款售后',
    id: 3,
  },
])
</script>

<template>
  <!-- 全部 -->
  <div class="order-box">
    <div class="top-nav">
      <div
        class="nav-item"
        @click="handelClick(index)"
        v-for="(item, index) in navList"
        :key="item.id"
        :class="{ activate: index === activateIndex }">
        {{ item.name }}
      </div>
    </div>
    <list />
  </div>
</template>

<style lang="scss" scoped>
.top-nav {
  width: 750rpx;
  height: 80rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-item {
    position: relative;
    padding: 5rpx 20rpx;
    color: rgba(51, 51, 51, 1);
    font-size: 30rpx;
    border-bottom: 2rpx solid transparent;
  }
  .activate {
    color: rgba(36, 147, 241, 1);
    border-bottom: 2rpx solid rgba(36, 147, 241, 1);
  }
}
</style>
