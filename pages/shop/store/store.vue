<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import leftTabBar from './components/leftTabBar.vue';
import rightContent from './components/rightContent.vue';
import shopCart from './components/shopCart.vue';
const scrollIntoDomClass = ref(''); // 滚动到指定位置的元素
const shopCartDialogVisible = ref(false); // 购物车dialog显示隐藏
const changeLeftBar = ({ item, index }) => {
  scrollIntoDomClass.value = `item-${index}`;
};
const onShopCartOpen = () => {
  shopCartDialogVisible.value = true;
};
const goOrder = () => {
  uni.navigateTo({
    url: '/pages/order/order',
  });
}
const buyShop = () => {
  uni.navigateTo({
    url: '/pages/order/orderPay',
  });
};
</script>

<template>
  <div class="shop_heade">
    <img class="img" src="@/static/shop/16pic_7425681_b.jpg" alt="" />
  </div>
  <div class="shop_store">
    <div class="store_msg">
      <div class="store_headPortrait">
        <img class="img" src="@/static/shop/16pic_7425681_b.jpg" alt="" />
      </div>
      <div class="store_introduce">
        <div class="store_title">得胜桥豆花米线(金江店)</div>
        <div class="store_describe">本店共有360种餐品供您品尝</div>
      </div>
    </div>
    <div class="store_content">
      <leftTabBar @changeLeftBar="changeLeftBar" />
      <rightContent class="rightContent" :scrollIntoDomClass="scrollIntoDomClass" />
    </div>
  </div>
  <div class="shop_buy">
    <div class="shop_order" @click="goOrder">
      <img class="img" src="@/static/shop/ico_myorder.png" alt="" />
      <span class="span">订单</span>
    </div>
    <div class="shop_btn">
      <div class="shop_cart" @click="onShopCartOpen">
        <img class="img" src="@/static/shop/shopCart.png" alt="" />
        <span class="span">购物车</span>
        <i class="corner_mark">22</i>
      </div>
      <div class="button" @click="buyShop">立即购买</div>
    </div>
  </div>
  <shop-cart v-model="shopCartDialogVisible"></shop-cart>
</template>

<style lang="scss" scoped>
.shop_heade {
  width: 100%;
  height: 256rpx;
  .img {
    width: 100%;
    height: 100%;
  }
}
.shop_store {
  width: 100%;
  height: calc(100vh - 396rpx);
  position: relative;
  background-color: #fff;
  .store_msg {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30rpx;
    width: 710rpx;
    height: 160rpx;
    border-radius: 12rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rpx 2rpx 8rpx rgba(0, 0, 0, 0.15);
    .store_headPortrait {
      width: 100rpx;
      height: 100rpx;
      border-radius: 6rpx;
      box-shadow: 0rpx 0rpx 6rpx rgba(0, 0, 0, 0.2);
      overflow: hidden;
      margin-right: 20rpx;
    }
    .store_introduce {
      flex: 1;
      height: 100rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .store_title {
        font-size: 34rpx;
        font-weight: 600;
        letter-spacing: 0rpx;
        line-height: 34rpx;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
      }
      .store_describe {
        /** 文本1 */
        font-size: 28rpx;
        font-weight: 500;
        letter-spacing: 0rpx;
        line-height: 28rpx;
        color: rgba(102, 102, 102, 1);
        text-align: left;
        vertical-align: top;
      }
    }
  }
}
.store_content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 110rpx;
}
.img {
  width: 100%;
  height: 100%;
}
.rightContent {
  flex: 1;
}
.shop_buy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 140rpx;
  padding: 0 40rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: inset 0rpx 1rpx 0rpx rgba(221, 221, 221, 1);
  .shop_order {
    width: 100rpx;
    height: 100rpx;
    background: rgba(255, 255, 255, 1);
    border: 1rpx solid rgba(238, 238, 238, 1);
    box-shadow: 0rpx 4rpx 24rpx -6rpx rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
    .img {
      width: 36rpx;
      height: 40rpx;
    }
    .span {
      margin-top: 6rpx;
      font-size: 20rpx;
      font-weight: 500;
      letter-spacing: 0rpx;
      line-height: 20rpx;
      color: rgba(36, 147, 241, 1);
      text-align: center;
      vertical-align: top;
    }
  }
  .shop_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16rpx 0 54rpx;
    width: 530rpx;
    height: 100rpx;
    border-radius: 50rpx;
    background: rgba(36, 147, 241, 1);
    box-shadow: 0rpx 4rpx 24rpx rgba(36, 147, 241, 0.6);
    .shop_cart {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .img {
        width: 46rpx;
        height: 48rpx;
      }
      .span {
        margin-top: 3rpx;
        font-size: 20rpx;
        font-weight: 500;
        letter-spacing: 0rpx;
        line-height: 20rpx;
        color: #fff;
        text-align: center;
        vertical-align: top;
      }
      .corner_mark {
        position: absolute;
        top: 0;
        right: -15rpx;
        min-width: 36rpx;
        height: 24rpx;
        border-radius: 12rpx;
        text-align: center;
        background: rgba(255, 255, 255, 1);
        font-size: 18rpx;
        font-weight: 600;
        letter-spacing: 0rpx;
        line-height: 24rpx;
        color: rgba(36, 147, 241, 1);
        vertical-align: top;
      }
    }
    .button {
      width: 200rpx;
      height: 68rpx;
      border-radius: 34rpx;
      background: rgba(255, 255, 255, 1);
      font-size: 28rpx;
      font-weight: 600;
      letter-spacing: 0rpx;
      line-height: 68rpx;
      color: rgba(36, 147, 241, 1);
      text-align: center;
      vertical-align: top;
    }
  }
}
</style>
