<!-- 规格选取 -->
<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue';
const props = defineProps(['modelValue']);
console.log(props.modelValue);
const emit = defineEmits(['update:modelValue']);
const popup = ref(null);
const specification = ref([]); // 选取的规格
const specificationOptions = ref([
  {
    id: 1,
    name: '大类1',
    checkbox: true,
    children: [
      {
        id: '1-1',
        name: '小类1-1',
      },
      {
        id: '1-2',
        name: '小类1-2',
      },
      {
        id: '1-3',
        name: '小类1-3',
      },
    ],
  },
  {
    id: 2,
    name: '大类2',
    children: [
      {
        id: '2-1',
        name: '小类2-1',
      },
      {
        id: '2-2',
        name: '小类2-2',
      },
      {
        id: '2-3',
        name: '小类2-3',
      },
      {
        id: '2-4',
        name: '小类2-4',
      },
      {
        id: '2-5',
        name: '小类2-5',
      },
    ],
  },
  {
    id: 3,
    name: '大类3',
    children: [
      {
        id: '3-1',
        name: '小类3-1',
      },
      {
        id: '3-2',
        name: '小类3-2',
      },
      {
        id: '3-3',
        name: '小类3-3',
      },
      {
        id: '3-4',
        name: '小类3-4',
      },
      {
        id: '3-5',
        name: '小类3-5',
      },
      {
        id: '3-6',
        name: '小类3-6',
      },
    ],
  },
]);

onMounted(() => {
  nextTick(() => {
    // console.log(popup.value);
    // popup.value.open();
  });
});
watch(
  () => {
    return props.modelValue;
  },
  (value) => {
    if (value && popup.value) {
      popup.value.open();
    }
  },
  { immediate: true, deep: true }
);
// 模拟数据获取过来
const init = () => {
  specification.value = specificationOptions.value.map((item) => {
    return item.children[0];
  });
};
init();
// 弹框状态改变
const onPopupChange = (status) => {
  if (!status.show) {
    emit('update:modelValue', status.show);
  }
}
// 单选复选
const onChangeOption = (item, option) => {
  const { value } = specification;
  if (item.checkbox) {
    const index = value.findIndex((obj) => {
      return obj.id === option.id;
    });
    // 判断是不是最后一个，及不可为空
    const isLast = value.filter(opt=>{
     return item.children.findIndex((chi) => chi.id === opt.id ) !== -1
    })
    // // 没保留最后一个
    // const isLast = value.some(opt=>{
    //  return item.children.some((chi) => chi.id === opt.id )
    // })
    // index !== -1 ? (isLast !== 1 && value.splice(index, 1)) : value.push(option);
    index !== -1 ? (isLast.length !== 1 && value.splice(index, 1)) : value.push(option);
    // index !== -1 ? value.splice(index, 1, option) : value.push(option);
    // value[index !== -1 ? index : value.length] = option;
  } else {
    const index = value.findIndex((obj) => {
      return (
        item.children.findIndex((chi) => {
          return chi.id === obj.id;
        }) !== -1
      );
    });
    index !== -1 ? value.splice(index, 1, option) : value.push(option);
  }
};
</script>

<template>
  <uni-popup ref="popup" type="center" @change='onPopupChange'>
    <div class="specificationSelectBox">
      <div class="goods_title">我是商品标题</div>
      <scroll-view class="specification_content" scroll-y>
        <div class="specification_box" v-for="(item, index) in specificationOptions" :key="item.id">
          <div class="specification_class">{{ item.name }}</div>
          <div class="specification_options">
            <div
              class="options_btn"
              :class="specification.find((obj) => obj.id === option.id) ? 'isActive' : ''"
              v-for="(option, i) in item.children"
              :key="option.id"
              @click="onChangeOption(item, option)"
            >
              <div class="span">{{ option.name }}</div>
            </div>
          </div>
        </div>
      </scroll-view>
      <div class="selected_specification">
        <div class="selected_specification_text">已选：</div>
        <div>
          <span class="span" v-for="(val, index) in specification" :key="val.id"
            >{{ val.name }} {{ index !== specification.length - 1 ? '、' : '' }}</span
          >
        </div>
      </div>
      <div class="buy_goods">
        <div class="goods_price">
          <span class="span1">￥{{ '18.6' }}</span>
          <span class="span2">￥{{ '24' }}</span>
          <span class="span3">{{ '折扣限一份' }}</span>
        </div>
        <div class="button">加入购物车</div>
      </div>
    </div>
  </uni-popup>
</template>

<style lang="scss" scoped>
.span {
  display: inline;
}
.specificationSelectBox {
  overflow: hidden;
  width: 680rpx;
  // height: 820rpx;
  border-radius: 12rpx;
  background: rgba(255, 255, 255, 1);
  padding: 50rpx 0rpx 0 0rpx;
  .goods_title {
    padding: 0 30rpx;
    font-size: 36rpx;
    font-weight: 600;
    letter-spacing: 0rpx;
    line-height: 36rpx;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-bottom: 40rpx;
  }
}
.specification_content {
  padding: 0 30rpx;
  max-height: 514rpx;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }
}
.specification_box {
  margin-bottom: 40rpx;
  .specification_class {
    font-size: 22rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    line-height: 22rpx;
    color: rgba(153, 153, 153, 1);
    text-align: left;
    vertical-align: top;
  }
  .specification_options {
    width: 620rpx;
    margin-top: 16rpx;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20rpx 16rpx;
    .options_btn {
      display: inline-block;
      box-sizing: border-box;
      padding: 0 42rpx;
      height: 60rpx;
      border-radius: 6rpx;
      background: rgba(255, 255, 255, 1);
      color: #000;
      border: 1rpx solid rgba(221, 221, 221, 1);
      font-size: 28rpx;
      line-height: 60rpx;
      text-align: center;
    }
    .isActive {
      font-weight: 600;
      background: rgba(239, 248, 255, 1);
      border: 1rpx solid rgba(36, 147, 241, 1);
      color: rgba(36, 147, 241, 1);
    }
  }
}
.selected_specification {
  padding: 0 30rpx;
  display: flex;
  align-items: center;
  height: 60rpx;
  background: rgba(250, 250, 250, 1);
  .selected_specification_text {
    font-size: 22rpx;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
    text-align: left;
  }
  .span {
    font-size: 22rpx;
    font-weight: 500;
    line-height: 22rpx;
    color: rgba(51, 51, 51, 1);
  }
}
.buy_goods {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
  width: 100%;
  height: 120rpx;
  background: #fff;
  border-radius: 0rpx 0rpx, 12rpx;
  .goods_price {
    .span1 {
      font-size: 44rpx;
      font-weight: 600;
      color: rgba(246, 55, 71, 1);
    }
    .span2 {
      font-size: 22rpx;
      font-weight: 500;
      text-decoration-line: line-through;
      color: rgba(153, 153, 153, 1);
    }
    .span3 {
      font-size: 22rpx;
      font-weight: 500;
      color: rgba(36, 147, 241, 1);
    }
  }
  .button {
    width: 180rpx;
    height: 56rpx;
    border-radius: 30rpx;
    background: rgba(36, 147, 241, 1);
    font-size: 26rpx;
    font-weight: 500;
    line-height: 56rpx;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
}
</style>
