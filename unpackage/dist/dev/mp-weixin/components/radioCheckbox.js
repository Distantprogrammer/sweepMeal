"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "radioCheckbox",
  props: {
    modelValue: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    value: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    label: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const checked = common_vendor.computed(() => {
      return props.modelValue === props.value;
    });
    const onChangeCheckbox = () => {
      emit("update:modelValue", props.value);
      emit("change");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(checked) ? 1 : "",
        b: common_vendor.t(__props.label),
        c: common_vendor.unref(checked) ? 1 : "",
        d: common_vendor.o(onChangeCheckbox)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba076113"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/components/radioCheckbox.vue"]]);
wx.createComponent(Component);
