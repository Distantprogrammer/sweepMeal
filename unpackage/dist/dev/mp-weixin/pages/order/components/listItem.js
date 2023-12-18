"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "listItem",
  setup(__props) {
    const goOrderDetails = () => {
      common_vendor.index.navigateTo({
        url: "/pages/order/orderDetails"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(6, (item, k0, i0) => {
          return {
            a: common_vendor.o(goOrderDetails, item),
            b: common_vendor.f(12, (item2, k1, i1) => {
              return {
                a: item2
              };
            }),
            c: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-74d95e9a"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/order/components/listItem.vue"]]);
wx.createComponent(Component);
