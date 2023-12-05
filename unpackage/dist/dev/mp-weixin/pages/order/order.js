"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_leftTabBar = common_vendor.resolveComponent("leftTabBar");
  const _component_rightContent = common_vendor.resolveComponent("rightContent");
  const _component_shop_cart = common_vendor.resolveComponent("shop-cart");
  (_component_leftTabBar + _component_rightContent + _component_shop_cart)();
}
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const scrollIntoDomClass = common_vendor.ref("");
    const shopCartDialogVisible = common_vendor.ref(true);
    const changeLeftBar = ({ item, index }) => {
      scrollIntoDomClass.value = `item-${index}`;
    };
    const onShopCartOpen = () => {
      shopCartDialogVisible.value = true;
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
        h: common_vendor.o(($event) => shopCartDialogVisible.value = $event),
        i: common_vendor.p({
          modelValue: shopCartDialogVisible.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93207a4f"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
