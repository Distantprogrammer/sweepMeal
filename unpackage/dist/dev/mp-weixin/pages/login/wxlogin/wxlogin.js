"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "wxlogin",
  setup(__props) {
    common_vendor.ref("");
    const navigateTo = () => {
      console.log(111);
      common_vendor.index.navigateTo({
        url: "/pages/shop/store/store"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.o(navigateTo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-286fbaf5"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/login/wxlogin/wxlogin.vue"]]);
wx.createPage(MiniProgramPage);
