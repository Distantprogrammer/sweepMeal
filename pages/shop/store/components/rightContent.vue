<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import goodsNumberBox from '@/components/goodsNumberBox.vue';
import specificationSelectBox from '@/components/specificationSelectBox.vue';
import { goodsList as goodsMockdata } from './mockData.js';
const props = defineProps('scrollIntoDomClass')
const isActiveIndex = ref(0);
const dialogVisible = ref(false); // 规格弹框显示隐藏
// onLoad() {
//     }
const goodsList = ref(goodsMockdata);
const specificationSelectClick = ()=>{
  dialogVisible.value = true;
}
const goodsNumberBoxClick = (item)=>{
  item.purchaseQuantity = item.purchaseQuantity + 1;
}
</script>

<template>
  <!-- 左侧菜单栏 -->
  <scroll-view class="rightContent" :enable-flex="true" scroll-y :show-scrollbar="false" :scroll-with-animation="true" :scroll-into-view="props.scrollIntoDomClass">
    <div class="class_box" v-for="(goods, i) in goodsList" :key="goods.id" :id="'item-'+i">
      <div class="class_title">
        <span>{{ goods.goodsClassName }}</span>
      </div>
      <div class="class_content">
        <div class="content_box" v-for="(item, index) in goods.children" :key="item.id">
          <div class="goods_img">
            <img class="img" src="@/static/shop/goods.png" alt="" />
          </div>
          <div class="goods_introduce">
            <div class="goods_title">{{ item.title }}</div>
            <div class="goods_salesVolume">
              <span>月售{{ item.salesVolume }}</span>
            </div>
            <div class="goods_discount">
              <div class="goods_discount_icon">
                <img class="img" src="@/static/shop/badge_ico_badge_discount.png" alt="" />
              </div>
              <div class="goods_discount_text">{{ item.discountNum }}折</div>
              <div class="goods_discount_imit">限{{ item.imitNum }}份</div>
            </div>
            <div class="goods_bottom">
              <div class="goods_price">
                <div class="sale_price">￥{{ item.price }}</div>
                <span>&nbsp;</span>
                <div class="crossed_rice">￥{{ item.crossedRice }}</div>
              </div>
              <div class="goods_specification" v-if="item.specificationShow" @click="specificationSelectClick">选规格</div>
              <div class="goods_number" v-else-if="item.purchaseQuantity">
                <goods-number-Box v-model="item.purchaseQuantity"></goods-number-Box>
              </div>
              <div @click="goodsNumberBoxClick(item)" class="uni-numbox-btns" v-else-if="!item.purchaseQuantity">
                <img class="img" src="@/static/shop/ico_add_goods_h22.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroll-view>
  <specification-select-box v-model="dialogVisible"></specification-select-box>
</template>

<style lang="scss" scoped>
.img {
  display: block;
  width: 100%;
  height: 100%;
  // object-fit: cover;
}
.rightContent {
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
.class_box {
  .class_title {
    width: 590rpx;
    height: 80rpx;
    background: rgba(255, 255, 255, 1);
    padding: 26rpx 0 26rpx 20rpx;
    font-size: 28rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    line-height: 28rpx;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  .class_content {
  }
}
.content_box {
  padding: 0 20rpx;
  width: 590rpx;
  height: 240rpx;
  opacity: 1;
  background: #fff;
  display: flex;
  align-items: center;
  .goods_img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 6rpx;
    overflow: hidden;
    margin-right: 10rpx;
  }
  .goods_introduce {
    flex: 1;
    .goods_title {
      font-size: 30rpx;
      font-weight: 600;
      line-height: 36rpx;
      color: rgba(51, 51, 51, 1);
      text-align: left;
      vertical-align: top;
    }
    .goods_salesVolume {
      margin-top: 44rpx;
      font-size: 22rpx;
      font-weight: 500;
      letter-spacing: 1rpx;
      line-height: 22rpx;
      color: rgba(153, 153, 153, 1);
      text-align: left;
      vertical-align: top;
    }
    .goods_discount {
      margin: 16rpx 0 20rpx 0;
      display: flex;
      align-items: center;
      font-size: 24rpx;
      font-weight: 500;
      letter-spacing: 0rpx;
      // line-height: rpx;
      color: rgba(246, 55, 71, 1);
      text-align: left;
      .goods_discount_icon {
        width: 24rpx;
        height: 24rpx;
        overflow: hidden;
      }
      .goods_discount_text {
        margin-left: 10rpx;
      }
      .goods_discount_imit {
        margin-left: 10rpx;
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
          font-size: 29rpx;
          font-weight: 600;
          letter-spacing: 0rpx;
          line-height: 30rpx;
          color: rgba(246, 55, 71, 1);
          text-align: left;
          vertical-align: top;
        }
        .crossed_rice {
          font-size: 22rpx;
          font-weight: 500;
          letter-spacing: 0rpx;
          line-height: 22rpx;
          text-decoration-line: line-through;
          color: rgba(153, 153, 153, 1);
          text-align: left;
          vertical-align: top;
        }
      }
      .goods_specification {
        width: 100rpx;
        height: 44rpx;
        opacity: 1;
        border-radius: 22rpx;
        background: rgba(36, 147, 241, 1);
        font-size: 24rpx;
        font-weight: 500;
        letter-spacing: 0rpx;
        line-height: 44rpx;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
    }
  }
}
$box-height: 44rpx;
.uni-numbox-btns {
  .img{
    width: $box-height;
    height: $box-height;
  }
}
</style>
