<script setup>
import { ref } from 'vue';
import listItem from './components/listItem.vue'
const activateIndex = ref(0);
const handelClick = (index) => {
  activateIndex.value = index;
};
const navList = ref([
  {
    name: '全部',
    id: 0,
  },
  // {
  //   name: '待支付',
  //   id: 1,
  // },
  {
    name: '待取餐',
    id: 2,
  },
  // {
  //   name: '退款售后',
  //   id: 3,
  // },
]);
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
        :class="{ activate: index === activateIndex }"
      >
        {{ item.name }}
      </div>
    </div>
    <scroll-view class="list" scroll-y :show-scrollbar="false">
      <listItem/>
    </scroll-view>
  </div>
</template>

<style lang="scss" scoped>
.order-box{
  background-color: #fff;
  overflow: hidden;
}
.top-nav {
  height: 80rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  padding: 0 86rpx;
  display: flex;
  align-items: center;
  justify-content: center;
 
 
  .nav-item {
    position: relative;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
    font-size: 30rpx;
    margin-left: 60rpx;
    &:nth-child(1){
    margin-left: 0;
  }
  }
  .activate {
    &::after{
      content:"";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -23rpx;
      width: 100%;
      height:4rpx;
      background-color: rgba(36, 147, 241, 1);
    }
  }
}
.list{
  height: calc(100vh - 140rpx);
  // padding: 0 20rpx;
  padding-bottom: 80rpx;
}
</style>
