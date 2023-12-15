"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + goodsNumberBox + _easycom_uni_popup)();
}
const goodsNumberBox = () => "../../../../components/goodsNumberBox.js";
const _sfc_main = {
  __name: "shopCart",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const popup = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      common_vendor.watch(
        () => {
          return props.modelValue;
        },
        (value) => {
          if (value && popup.value) {
            common_vendor.nextTick$1(() => {
              popup.value.open();
            });
          }
        },
        { immediate: true, deep: true }
      );
    });
    const shopCartData = common_vendor.ref([
      {
        id: "1-1",
        // id
        title: "商品名称1",
        // 商品名称
        price: "100",
        // 价格
        crossedRice: "110",
        // 划线价格
        discountNum: 8.2,
        // 折扣
        salesVolume: 99,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: true,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-2",
        // id
        title: "商品名称2",
        // 商品名称
        price: "200",
        // 价格
        crossedRice: "210",
        // 划线价格
        discountNum: 9.2,
        // 折扣
        salesVolume: 88,
        // 销量
        imitNum: 2,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 1,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-3",
        // id
        title: "商品名称3",
        // 商品名称
        price: "300",
        // 价格
        crossedRice: "310",
        // 划线价格
        discountNum: 8.5,
        // 折扣
        salesVolume: 95,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-4",
        // id
        title: "商品名称3",
        // 商品名称
        price: "300",
        // 价格
        crossedRice: "310",
        // 划线价格
        discountNum: 8.5,
        // 折扣
        salesVolume: 95,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-5",
        // id
        title: "商品名称3",
        // 商品名称
        price: "300",
        // 价格
        crossedRice: "310",
        // 划线价格
        discountNum: 8.5,
        // 折扣
        salesVolume: 95,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      }
    ]);
    const onPopupChange = (status) => {
      if (!status.show) {
        emit("update:modelValue", status.show);
      }
    };
    const buyShop = () => {
      common_vendor.index.navigateTo({
        url: "/pages/order/orderPay"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "trash",
          color: "rgba(155, 160, 166, 1)",
          size: "20"
        }),
        b: common_vendor.f(shopCartData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.imitNum),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.crossedRice),
            e: "1623d57b-2-" + i0 + ",1623d57b-0",
            f: common_vendor.o(($event) => item.purchaseQuantity = $event, item.id),
            g: common_vendor.p({
              modelValue: item.purchaseQuantity
            }),
            h: item.id
          };
        }),
        c: common_assets._imports_0$2,
        d: common_assets._imports_1$2,
        e: common_vendor.o(buyShop),
        f: common_vendor.sr(popup, "1623d57b-0", {
          "k": "popup"
        }),
        g: common_vendor.o(onPopupChange),
        h: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1623d57b"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/shop/store/components/shopCart.vue"]]);
wx.createComponent(Component);
