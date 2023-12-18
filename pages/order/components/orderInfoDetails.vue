<script setup>
const copyOrderSn = (orderSn) => {
  uni.setClipboardData({
    data: orderSn,
    success: function (res) {
      uni.getClipboardData({
        success: function (res) {
          uni.showToast({
            title: '复制成功'
          })
        }
      })
    }
  })
}
</script>

<template>
  <div class="orderInfoDetails_box">
    <div class="orderInfoDetails_content">
      <div class="orderInfoDetails_item orderInfoDetails_id">
        <span class="lable">订单编号：</span>
        <span class="item_text">23174910923790870</span>
        <span class="copyBtn" @click="copyOrderSn('23174910923790870')">复制</span>
      </div>
      <div class="orderInfoDetails_item">
        <span class="lable">下单时间：</span>
        <span class="item_text">2019-04-03 15:32:03</span>
      </div>
      <div class="orderInfoDetails_item">
        <span class="lable">支付方式：</span>
        <span class="item_text">在线支付</span>
      </div>
      <div class="orderInfoDetails_item">
        <span class="lable">支付时间：</span>
        <span class="item_text">2019-04-03 15:39:56</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderInfoDetails_box {
  padding: 0 20rpx;

  .orderInfoDetails_content {
    padding: 30rpx 0;
    padding-top: 0;
    height: 398rpx;
    border-radius: 20rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: inset 0rpx 1rpx 0rpx rgba(221, 221, 221, 1);
  }
}

.orderInfoDetails_item {
  display: flex;
  align-items: center;
  margin-bottom: 25rpx;
  padding: 0 30rpx;

  .lable {
    font-size: 28rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    line-height: 28rpx;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
  }

  .item_text {
    font-size: 28rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    line-height: 28rpx;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;

  }

  .copyBtn {
    display: inline-block;
    width: 72rpx;
    height: 40rpx;
    border-radius: 4rpx;
    border: 1rpx solid rgba(76, 156, 224, 1);
    font-size: 24rpx;
    font-weight: 500;
    line-height: 40rpx;
    color: rgba(76, 156, 224, 1);
    text-align: center;
    margin-left: 24rpx;
  }
}

.orderInfoDetails_id {
  height: 100rpx;
  box-shadow: 0rpx 1rpx 0rpx rgba(221, 221, 221, 1);
}
</style>
