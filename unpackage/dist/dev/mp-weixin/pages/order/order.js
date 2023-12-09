"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  list();
}
const list = () => "./components/list.js";
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const activateIndex = common_vendor.ref(0);
    const handelClick = (index) => {
      activateIndex.value = index;
    };
    const navList = common_vendor.ref([
      {
        name: "全部",
        id: 0
      },
      {
        name: "待支付",
        id: 1
      },
      {
        name: "待取餐",
        id: 2
      },
      {
        name: "退款售后",
        id: 3
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(navList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => handelClick(index), item.id),
            c: item.id,
            d: index === activateIndex.value ? 1 : ""
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93207a4f"], ["__file", "C:/Users/17467/Desktop/sweepMeal/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
