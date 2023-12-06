"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Math) {
  (leftTabBar + rightContent + shopCart)();
}
const leftTabBar = () => "./components/leftTabBar.js";
const rightContent = () => "./components/rightContent.js";
const shopCart = () => "./components/shopCart.js";
const _sfc_main = {
  __name: "store",
  setup(__props) {
    const scrollIntoDomClass = common_vendor.ref("");
    const shopCartDialogVisible = common_vendor.ref(false);
    const changeLeftBar = ({ item, index }) => {
      scrollIntoDomClass.value = `item-${index}`;
    };
    const onShopCartOpen = () => {
      shopCartDialogVisible.value = true;
    };
    const buyShop = () => {
      common_vendor.index.navigateTo({
        url: "/pages/order/orderPay"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_assets._imports_0$1,
        c: common_vendor.o(changeLeftBar),
        d: common_vendor.p({
          scrollIntoDomClass: scrollIntoDomClass.value
        }),
        e: common_assets._imports_1$1,
        f: common_assets._imports_1$2,
        g: common_vendor.o(onShopCartOpen),
        h: common_vendor.o(buyShop),
        i: common_vendor.o(($event) => shopCartDialogVisible.value = $event),
        j: common_vendor.p({
          modelValue: shopCartDialogVisible.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-827f3a54"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/shop/store/store.vue"]]);
wx.createPage(MiniProgramPage);
