"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_shop_store_components_mockData = require("./mockData.js");
const _sfc_main = {
  __name: "leftTabBar",
  emits: ["changeLeftBar"],
  setup(__props, { emit }) {
    const leftTabBarData = common_vendor.ref(pages_shop_store_components_mockData.goodsNavBar);
    const isActiveIndex = common_vendor.ref(0);
    const changeLeftBar = (item, index) => {
      isActiveIndex.value = index;
      emit("changeLeftBar", { item, index });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(leftTabBarData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.goodsClassName),
            b: common_vendor.n(isActiveIndex.value === index ? "active" : ""),
            c: common_vendor.n(isActiveIndex.value + 1 === index ? "borderTopRightRadius" : ""),
            d: common_vendor.n(isActiveIndex.value - 1 === index ? "borderBottomRightRadius" : ""),
            e: item.id,
            f: common_vendor.o(($event) => changeLeftBar(item, index), item.id)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c7c3ef7"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/shop/store/components/leftTabBar.vue"]]);
wx.createComponent(Component);
