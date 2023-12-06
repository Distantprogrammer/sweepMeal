<script setup>
import { ref } from 'vue';
import radioCheckbox from '@/components/radioCheckbox.vue';
const radioCheckboxOptions = ref([
  { value: '在店里吃', label: '在店里吃' },
  { value: '打包带走', label: '打包带走' },
]);
const checkboxValue = ref('在店里吃');
</script>

<template>
  <div class="orderStatus_content">
    <div class="orderStatus_title" v-if="false">退款中</div>
    <div class="content_box">
      <div class="orderStatus_box">
        <img class="img" src="@/static/order/img_order_foodnum.png" alt="" />
        <div class="msg_box">
          <div class="msg_title">付款成功后，获取取餐码</div>
          <div class="msg_des">
            <div class="msg_radio">在店里吃</div>
            <span class="span"> 依据取餐码到前台取餐 </span>
          </div>
        </div>
      </div>
      <div class="radio_checkbox">
        <radio-checkbox
          class="radio_checkbox_item"
          v-model="checkboxValue"
          v-for="(item, index) in radioCheckboxOptions"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.orderStatus_content {
  padding: 0 20rpx;
  padding-top: 40rpx;
  background: linear-gradient(180deg, rgba(36, 147, 241, 1) 0%, rgba(36, 147, 241, 1) 66.37%, rgba(255, 255, 255, 0) 100%);
  .orderStatus_title {
    font-size: 40rpx;
    font-weight: 600;
    letter-spacing: 0rpx;
    line-height: 40rpx;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 54rpx;
  }
  .content_box {
    background: #fff;
    border-radius: 20rpx;
  }
}
.orderStatus_box {
  padding: 40rpx 30rpx;
  display: flex;
  align-items: center;
  .img {
    width: 120rpx;
    height: 120rpx;
    margin-right: 20rpx;
  }
  .msg_box {
    height: 120rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .msg_title {
      font-size: 36rpx;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 10rpx;
    }
    .msg_des {
      .msg_radio {
        display: inline-block;
        padding: 6rpx 10rpx;
        border-radius: 4rpx;
        background: #f0f8ff;
        border: 1rpx solid #2493f1;
        font-size: 20rpx;
        font-weight: 500;
        color: rgba(36, 147, 241, 1);
        text-align: center;
      }
      .span {
        display: inline;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
.radio_checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  box-shadow: inset 0rpx 1rpx 0rpx rgba(221, 221, 221, 1);
  .radio_checkbox_item {
    flex: 1;
  }
}
</style>
