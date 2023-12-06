<!-- 规格选取 -->
<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import goodsNumberBox from '@/components/goodsNumberBox.vue';
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const popup = ref(null);
onMounted(() => {
  watch(
    () => {
      return props.modelValue;
    },
    (value) => {
      if (value && popup.value) {
        nextTick(() => {
          popup.value.open();
        });
      }
    },
    { immediate: true, deep: true }
  );
});
const shopCartData = ref([
  {
    id: '1-1', // id
    title: '商品名称1', // 商品名称
    price: '100', // 价格
    crossedRice: '110', // 划线价格
    discountNum: 8.2, // 折扣
    salesVolume: 99, // 销量
    imitNum: 1, // 限购
    specificationShow: true, // 规格显示
    purchaseQuantity: 0, // 购买数量
    goodsImg: 'https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg', // 商品图片
  },
  {
    id: '1-2', // id
    title: '商品名称2', // 商品名称
    price: '200', // 价格
    crossedRice: '210', // 划线价格
    discountNum: 9.2, // 折扣
    salesVolume: 88, // 销量
    imitNum: 2, // 限购
    specificationShow: false, // 规格显示
    purchaseQuantity: 1, // 购买数量
    goodsImg: 'https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg', // 商品图片
  },
  {
    id: '1-3', // id
    title: '商品名称3', // 商品名称
    price: '300', // 价格
    crossedRice: '310', // 划线价格
    discountNum: 8.5, // 折扣
    salesVolume: 95, // 销量
    imitNum: 1, // 限购
    specificationShow: false, // 规格显示
    purchaseQuantity: 0, // 购买数量
    goodsImg: 'https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg', // 商品图片
  },
  {
    id: '1-4', // id
    title: '商品名称3', // 商品名称
    price: '300', // 价格
    crossedRice: '310', // 划线价格
    discountNum: 8.5, // 折扣
    salesVolume: 95, // 销量
    imitNum: 1, // 限购
    specificationShow: false, // 规格显示
    purchaseQuantity: 0, // 购买数量
    goodsImg: 'https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg', // 商品图片
  },
  {
    id: '1-5', // id
    title: '商品名称3', // 商品名称
    price: '300', // 价格
    crossedRice: '310', // 划线价格
    discountNum: 8.5, // 折扣
    salesVolume: 95, // 销量
    imitNum: 1, // 限购
    specificationShow: false, // 规格显示
    purchaseQuantity: 0, // 购买数量
    goodsImg: 'https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg', // 商品图片
  },
]);
// 弹框状态改变
const onPopupChange = (status) => {
  if (!status.show) {
    emit('update:modelValue', status.show);
  }
};
const buyShop = () => {
  uni.navigateTo({
    url: '/pages/order/orderPay',
  });
};
</script>

<template>
  <uni-popup ref="popup" type="bottom" background-color='#fff' @change="onPopupChange">
    <div class="shopCart_box">
      <div class="shopCart_heard">
        <div class="shopCart_delete"><uni-icons type="trash" color="rgba(155, 160, 166, 1)" size="20"></uni-icons>清空购物车</div>
        <div class="shopCart_title">购物车</div>
      </div>
      <scroll-view class="shopCart_content" scroll-y>
        <div class="goos_cell" v-for="(item, index) in shopCartData" :key="item.id">
          <div class="goods_img">
            <img class="img" src="@/static/shop/goods.png" alt="" />
          </div>
          <div class="goods_introduce">
            <div class="goods_title">{{ item.title }}</div>
            <div class="goods_specification">
              <div class="goods_specification_text">限{{ item.imitNum }}份</div>
            </div>
            <div class="goods_bottom">
              <div class="goods_price">
                <div class="sale_price">￥{{ item.price }}</div>
                <span>&nbsp;</span>
                <div class="crossed_rice">￥{{ item.crossedRice }}</div>
              </div>
              <div class="goods_number">
                <goods-number-Box v-model="item.purchaseQuantity"></goods-number-Box>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
      <div class=""></div>
      <div class="shop_buy">
        <div class="shop_btn">
          <div class="shop_cart">
            <img class="img" src="@/static/shop/shopCart.png" alt="" />
            <span class="span">购物车</span>
            <i class="corner_mark">22</i>
          </div>
          <div class="button" @click="buyShop">立即购买</div>
        </div>
      </div>
    </div>
  </uni-popup>
</template>

<style lang="scss" scoped>
.shopCart_box {
  // height: 600rpx;
}
.shopCart_heard {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 28rpx;
  height: 100rpx;
  background-color: #fff;
  box-shadow: inset 0rpx -1rpx 0rpx rgba(221, 221, 221, 1);
  .shopCart_delete {
    position: absolute;
    left: 28rpx;
    display: flex;
    align-items: center;
    font-size: 28rpx;
    font-weight: 500;
    line-height: 28rpx;
    color: rgba(153, 153, 153, 1);
  }
  .shopCart_title {
    flex: 1;
    font-size: 34rpx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
}
.shopCart_content {
  // padding: 0 30rpx;
  max-height: 514rpx;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
}
.goos_cell {
  padding: 0 24rpx;
  height: 168rpx;
  background: #fff;
  display: flex;
  align-items: center;
  .goods_img {
    width: 120rpx;
    height: 120rpx;
    border-radius: 6rpx;
    border: 1rpx solid rgba(238, 238, 238, 1);
    overflow: hidden;
    margin-right: 30rpx;
  }
  .goods_introduce {
    flex: 1;
    .goods_title {
      font-size: 28rpx;
      font-weight: 500;
      line-height: 36rpx;
      color: rgba(51, 51, 51, 1);
      text-align: left;
      vertical-align: top;
    }
    .goods_specification {
      margin: 16rpx 0;
      .goods_specification_text {
        font-size: 20rpx;
        font-weight: 500;
        line-height: 20rpx;
        color: rgba(153, 153, 153, 1);
      }
    }
    .goods_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44rpx;
      .goods_price {
        display: flex;
        align-items: center;
        .sale_price {
          font-size: 36rpx;
          font-weight: 600;
          line-height: 36rpx;
          color: rgba(246, 55, 71, 1);
        }
        .crossed_rice {
          font-size: 24rpx;
          font-weight: 500;
          line-height: 24rpx;
          text-decoration-line: line-through;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
}
.shop_buy {
  display: flex;
  align-items: center;
  justify-content: ceil($number: 0);
  width: 100%;
  height: 140rpx;
  padding: 0 40rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: inset 0rpx 1rpx 0rpx rgba(221, 221, 221, 1);
  .shop_btn {
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16rpx 0 54rpx;
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
