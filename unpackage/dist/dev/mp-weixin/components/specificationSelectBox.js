"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "specificationSelectBox",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    console.log(props.modelValue);
    const popup = common_vendor.ref(null);
    const specification = common_vendor.ref([]);
    const specificationOptions = common_vendor.ref([
      {
        id: 1,
        name: "大类1",
        checkbox: true,
        children: [
          {
            id: "1-1",
            name: "小类1-1"
          },
          {
            id: "1-2",
            name: "小类1-2"
          },
          {
            id: "1-3",
            name: "小类1-3"
          }
        ]
      },
      {
        id: 2,
        name: "大类2",
        children: [
          {
            id: "2-1",
            name: "小类2-1"
          },
          {
            id: "2-2",
            name: "小类2-2"
          },
          {
            id: "2-3",
            name: "小类2-3"
          },
          {
            id: "2-4",
            name: "小类2-4"
          },
          {
            id: "2-5",
            name: "小类2-5"
          }
        ]
      },
      {
        id: 3,
        name: "大类3",
        children: [
          {
            id: "3-1",
            name: "小类3-1"
          },
          {
            id: "3-2",
            name: "小类3-2"
          },
          {
            id: "3-3",
            name: "小类3-3"
          },
          {
            id: "3-4",
            name: "小类3-4"
          },
          {
            id: "3-5",
            name: "小类3-5"
          },
          {
            id: "3-6",
            name: "小类3-6"
          }
        ]
      }
    ]);
    common_vendor.onMounted(() => {
      common_vendor.nextTick$1(() => {
      });
    });
    common_vendor.watch(
      () => {
        return props.modelValue;
      },
      (value) => {
        if (value && popup.value) {
          popup.value.open();
        }
      },
      { immediate: true, deep: true }
    );
    const init = () => {
      specification.value = specificationOptions.value.map((item) => {
        return item.children[0];
      });
    };
    init();
    const onPopupChange = (status) => {
      if (!status.show) {
        emit("update:modelValue", status.show);
      }
    };
    const onChangeOption = (item, option) => {
      const { value } = specification;
      if (item.checkbox) {
        const index = value.findIndex((obj) => {
          return obj.id === option.id;
        });
        const isLast = value.filter((opt) => {
          return item.children.findIndex((chi) => chi.id === opt.id) !== -1;
        });
        index !== -1 ? isLast.length !== 1 && value.splice(index, 1) : value.push(option);
      } else {
        const index = value.findIndex((obj) => {
          return item.children.findIndex((chi) => {
            return chi.id === obj.id;
          }) !== -1;
        });
        index !== -1 ? value.splice(index, 1, option) : value.push(option);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(specificationOptions.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.children, (option, i, i1) => {
              return {
                a: common_vendor.t(option.name),
                b: common_vendor.n(specification.value.find((obj) => obj.id === option.id) ? "isActive" : ""),
                c: option.id,
                d: common_vendor.o(($event) => onChangeOption(item, option), option.id)
              };
            }),
            c: item.id
          };
        }),
        b: common_vendor.f(specification.value, (val, index, i0) => {
          return {
            a: common_vendor.t(val.name),
            b: common_vendor.t(index !== specification.value.length - 1 ? "、" : ""),
            c: val.id
          };
        }),
        c: common_vendor.t("18.6"),
        d: common_vendor.t("24"),
        e: common_vendor.t("折扣限一份"),
        f: common_vendor.sr(popup, "bcac0c9a-0", {
          "k": "popup"
        }),
        g: common_vendor.o(onPopupChange),
        h: common_vendor.p({
          type: "center"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bcac0c9a"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/components/specificationSelectBox.vue"]]);
wx.createComponent(Component);
