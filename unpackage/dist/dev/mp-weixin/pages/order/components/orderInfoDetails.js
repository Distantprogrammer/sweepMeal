"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "orderInfoDetails",
  setup(__props) {
    const copyOrderSn = (orderSn) => {
      common_vendor.index.setClipboardData({
        data: orderSn,
        success: function(res) {
          common_vendor.index.getClipboardData({
            success: function(res2) {
              common_vendor.index.showToast({
                title: "复制成功"
              });
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => copyOrderSn("23174910923790870"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a8374a20"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/order/components/orderInfoDetails.vue"]]);
wx.createComponent(Component);
