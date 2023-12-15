<script setup></script>

<template>
  <li class="item" v-for="item in 6" :key="item">
    <div class="top">
      <div class="info">
        <img
          class="picture"
          src="https://img.js.design/assets/img/645601d44b4eef37079ccb59.png"
        />
        <div class="text-box">
          <div class="title">得胜桥豆花米线</div>
          <div class="state">到店里吃</div>
        </div>
      </div>
      <div class="item-state">餐品制作中</div>
    </div>
    <div class="item-content">
      <div class="sort">
        <div>取餐号</div>
        <div>0098</div>
        <div>排在第N位</div>
      </div>
      <scroll-view
        class="scroll-view_H commodity-box"
        scroll-x="true"
        @scroll="scroll"
        scroll-left="120"
      >
        <div class="scroll-view-item_H" v-for="item in 12" :key="item">
          <div class="commodity">
            <img
              class="commodity-img"
              src="https://img.js.design/assets/img/645601d44b4eef37079ccb5c.png"
            />
            <div class="commodity-title">我是商品标题我是商品标题</div>
          </div>
        </div>
      </scroll-view>
      <div class="price-box">
        <span class="price">￥28.00</span>
        <span class="count">共3件</span>
      </div>
    </div>
    <div class="footer">
      <button class="button" type="primary">切换菜单方向</button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.item {
  padding: 24rpx;
  overflow: hidden;
  border-radius: 20rpx;
  margin: 20rpx auto 0;
  background: rgba(255, 255, 255, 1);

  margin-bottom: 20rpx;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      .picture {
        width: 72rpx;
        height: 72rpx;
      }
      .text-box {
        margin-left: 10rpx;
        .title {
          font-size: 30rpx;
          font-weight: 600;
        }
        .state {
          width: 100rpx;
          height: 32rpx;
          line-height: 32rpx;
          text-align: center;
          font-size: 20rpx;
          color: rgba(36, 147, 241, 1);
          background-color: rgba(240, 248, 255, 1);
          border: rgba(36, 147, 241, 1) 1px solid;
          border-radius: 5rpx;
          margin-top: 10rpx;
        }
      }
    }
    .item-state {
      font-size: 28rpx;
      font-weight: 500;
      color: rgba(36, 147, 241, 1);
    }
  }
  .item-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 30rpx;
    overflow: hidden;
    .sort {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 160rpx;
      height: 140rpx;
      border: 2rpx solid rgba(179, 220, 255, 1);
      border-radius: 10rpx;
      margin-right: 10px;
      :nth-child(1) {
        font-size: 22rpx;
        font-weight: 700;
        color: rgba(36, 147, 241, 1);
      }
      :nth-child(2) {
        font-size: 52rpx;
        font-weight: 600;
        color: black;
      }
      :nth-child(3) {
        font-size: 20rpx;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
    .commodity-box {
      display: flex;
      justify-content: center;
      overflow: hidden;
      // width: auto;
      flex: 1;
      .commodity {
        margin: 0 10rpx;
        &-img {
          width: 150rpx;
          height: 130rpx;
          object-fit: cover;
        }
        &-title {
          width: 144rpx;
          height: 24rpx;
          font-size: 24rpx;
          font-weight: 500;
          line-height: 24rpx;
          color: rgba(102, 102, 102, 1);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .scroll-view_H {
      white-space: nowrap;
      width: 100%;
      .scroll-view-item_H {
        display: inline-block;
        width: 150rpx;
        text-align: center;
        font-size: 36rpx;
        margin: 0 10rpx;
        .commodity {
          width: 150rpx;
          &-img {
            width: 150rpx;
            height: 130rpx;
            object-fit: cover;
          }
          &-title {
            width: 144rpx;
            height: 24rpx;
            font-size: 24rpx;
            font-weight: 500;
            line-height: 24rpx;
            color: rgba(102, 102, 102, 1);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .price-box {
      width: 180rpx;
      height: 164rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 1);
      z-index: 999;
      .price {
        font-size: 24rpx;
        font-weight: 500;
      }
      .count {
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        text-align: right;
      }
    }
  }
  .footer {
    float: right;
    margin-top: 20rpx;
    margin-right: 30rpx;
    .button {
      padding: 0rpx 20rpx;
      height: 56rpx;
      line-height: 56rpx;
      border-radius: 28rpx;
      background: rgba(36, 147, 241, 1);
      font-size: 28rpx;
      font-weight: 500;
      letter-spacing: 0rpx;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
