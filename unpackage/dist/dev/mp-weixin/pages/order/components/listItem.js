"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(6, (item, k0, i0) => {
      return {
        a: common_vendor.f(12, (item2, k1, i1) => {
          return {
            a: item2
          };
        }),
        b: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args), item),
        c: item
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74d95e9a"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/order/components/listItem.vue"]]);
wx.createComponent(Component);
