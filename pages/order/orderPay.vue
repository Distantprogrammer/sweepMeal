<script setup>
import orderStatus from './components/orderStatus.vue';
import orderItemDetails from './components/orderItemDetails.vue';
</script>

<template>
  <div class="orderPay_content">
    <div class="orderStatus">
      <order-status></order-status>
    </div>
    <div class="orderItemDetails">
      <order-item-details></order-item-details>
    </div>
    <div class="order_pay">
      <div class="order_total_prices">
        <span class="span">合计:</span>
        <span class="prices">￥82.5</span>
      </div>
      <div class="order_buy_btn">立即支付</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderItemDetails {
  margin-top: 20rpx;
  padding-bottom: 100rpx;
}
.order_pay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100rpx;
  .order_total_prices {
    flex: 1;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #fff;
    .span {
      font-size: 32rpx;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
    }
    .prices {
      font-size: 32rpx;
      font-weight: 600;
      color: rgba(241, 62, 39, 1);
    }
  }

  .order_buy_btn {
    flex: 1;
    background: #2493f1;
    font-size: 36rpx;
    height: 100rpx;
    line-height: 100rpx;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
}
</style>
