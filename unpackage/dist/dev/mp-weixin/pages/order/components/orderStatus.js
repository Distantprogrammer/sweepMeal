"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Math) {
  radioCheckbox();
}
const radioCheckbox = () => "../../../components/radioCheckbox.js";
const _sfc_main = {
  __name: "orderStatus",
  setup(__props) {
    const radioCheckboxOptions = common_vendor.ref([
      { value: "在店里吃", label: "在店里吃" },
      { value: "打包带走", label: "打包带走" }
    ]);
    const checkboxValue = common_vendor.ref("在店里吃");
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        a: common_assets._imports_0$3,
        b: common_vendor.f(radioCheckboxOptions.value, (item, index, i0) => {
          return {
            a: item.value,
            b: "d9480165-0-" + i0,
            c: common_vendor.o(($event) => checkboxValue.value = $event, item.value),
            d: common_vendor.p({
              value: item.value,
              label: item.label,
              modelValue: checkboxValue.value
            })
          };
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d9480165"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/order/components/orderStatus.vue"]]);
wx.createComponent(Component);
