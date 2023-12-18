<script setup>
import orderStatus from './components/orderStatus.vue';
import orderItemDetails from './components/orderItemDetails.vue';
import orderInfoDetails from './components/orderInfoDetails.vue';
</script>

<template>
  <div class="orderDetails_content">
    <div class="orderStatus">
      <order-status></order-status>
    </div>
    <div class="orderItemDetails">
      <order-item-details></order-item-details>
    </div>
    <div class="orderInfoDetails">
      <order-info-details></order-info-details>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderDetails_content{
  padding-bottom: 100rpx;
}
.orderItemDetails {
  margin: 20rpx 0;
  // padding-bottom: 100rpx;
}
</style>
