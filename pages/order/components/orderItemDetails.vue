<script setup></script>

<template>
  <div class="orderItemDetails_box">
    <div class="orderItemDetails_shop">
      <img class="shop_img" src="@/static/order/img_order_foodnum.png" alt="" />
      <span class="shop_title">包裹王同德店-商超</span>
    </div>
    <div class="orderItemDetails_order_statistics">共N件商品</div>
    <scroll-view scroll-y class="orderItemDetails_order">
      <div class="orderItemDetails_order_cell" v-for="(item, index) in 6" :key="index">
        <img class="order_img" src="@/static/order/img_order_foodnum.png" alt="" />
        <div class="order_msg">
          <div class="order_title">瓶装加多宝</div>
          <div class="order_specification">瓶装</div>
        </div>
        <div class="order_num">x1</div>
        <div class="order_price">￥2</div>
      </div>
    </scroll-view>
    <div class="orderItemDetails_order_other_expenses">
      <span class="span">打包费</span>
      <span class="span">￥1.5</span>
    </div>
    <div class="orderItemDetails_order_total_prices">
      <span class="span">合计金额</span>
      <span class="prices">￥82.5</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderItemDetails_box {
  padding: 0 20rpx;
}
.orderItemDetails_shop {
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  height: 80rpx;
  background: #ffffff;
  .shop_img {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    margin-right: 10rpx;
  }
  .shop_title {
    font-size: 34rpx;
    font-weight: 600;
    letter-spacing: 0rpx;
    line-height: 34rpx;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
}
.orderItemDetails_order_statistics {
  height: 60rpx;
  background: #fafafa;
  line-height: 60rpx;
  font-size: 28rpx;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}
.orderItemDetails_order {
  background: #ffffff;
  height: 360rpx;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
  .orderItemDetails_order_cell {
    padding: 0 50rpx 0 30rpx;
    height: 120rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .order_img {
      width: 80rpx;
      height: 80rpx;
      border-radius: 6rpx;
      margin-right: 20rpx;
    }
    .order_msg {
      width: 344rpx;
      .order_title {
        font-size: 30rpx;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 18rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .order_specification {
        font-size: 22rpx;
        font-weight: 500;
        line-height: 22rpx;
        color: rgba(102, 102, 102, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .order_num {
      flex: 1;
      font-size: 28rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .order_price {
      flex: 1;
      font-size: 30rpx;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      text-align: right;
    }
  }
}
.orderItemDetails_order_other_expenses {
  height: 72rpx;
  background: #ffffff;
  padding: 0 50rpx 0 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .span {
    font-size: 28rpx;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }
}
.orderItemDetails_order_total_prices {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50rpx 0 30rpx;
  height: 100rpx;
  background: #ffffff;
  box-shadow: inset 0rpx 1rpx 0rpx #dddddd;
  .span {
    font-size: 28rpx;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }
  .prices {
    font-size: 36rpx;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
