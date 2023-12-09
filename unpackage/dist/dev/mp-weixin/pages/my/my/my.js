"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const code = common_vendor.ref("");
    const getLogin = () => {
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          console.log(res);
          code.value = res.code;
        }
      });
      console.log(789);
    };
    const getPhoneNumber = (e) => {
      getLogin();
      if (e.detail.errMsg !== "getPhoneNumber:ok") {
        return;
      }
      e.detail.encryptedData;
      e.detail.iv;
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.o((...args) => _ctx.wxlogin && _ctx.wxlogin(...args)),
        d: common_vendor.o(getPhoneNumber)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-906f80f6"], ["__file", "C:/Users/17467/Desktop/sweepMeal/pages/my/my/my.vue"]]);
wx.createPage(MiniProgramPage);
