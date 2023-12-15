"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const pages_shop_store_components_mockData = require("./mockData.js");
if (!Math) {
  (goodsNumberBox + specificationSelectBox)();
}
const goodsNumberBox = () => "../../../../components/goodsNumberBox.js";
const specificationSelectBox = () => "../../../../components/specificationSelectBox.js";
const _sfc_main = {
  __name: "rightContent",
  props: "scrollIntoDomClass",
  setup(__props) {
    const props = __props;
    common_vendor.ref(0);
    const dialogVisible = common_vendor.ref(false);
    const goodsList = common_vendor.ref(pages_shop_store_components_mockData.goodsList);
    const specificationSelectClick = () => {
      dialogVisible.value = true;
    };
    const goodsNumberBoxClick = (item) => {
      item.purchaseQuantity = item.purchaseQuantity + 1;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goodsList.value, (goods, i, i0) => {
          return {
            a: common_vendor.t(goods.goodsClassName),
            b: common_vendor.f(goods.children, (item, index, i1) => {
              return common_vendor.e({
                a: common_vendor.t(item.title),
                b: common_vendor.t(item.salesVolume),
                c: common_vendor.t(item.discountNum),
                d: common_vendor.t(item.imitNum),
                e: common_vendor.t(item.price),
                f: common_vendor.t(item.crossedRice),
                g: item.specificationShow
              }, item.specificationShow ? {
                h: common_vendor.o(specificationSelectClick, item.id)
              } : item.purchaseQuantity ? {
                j: "a251f695-0-" + i0 + "-" + i1,
                k: common_vendor.o(($event) => item.purchaseQuantity = $event, item.id),
                l: common_vendor.p({
                  modelValue: item.purchaseQuantity
                })
              } : !item.purchaseQuantity ? {
                n: common_assets._imports_1$4,
                o: common_vendor.o(($event) => goodsNumberBoxClick(item), item.id)
              } : {}, {
                i: item.purchaseQuantity,
                m: !item.purchaseQuantity,
                p: item.id
              });
            }),
            c: goods.id,
            d: "item-" + i
          };
        }),
        b: common_assets._imports_0$2,
        c: common_assets._imports_1$3,
        d: props.scrollIntoDomClass,
        e: common_vendor.o(($event) => dialogVisible.value = $event),
        f: common_vendor.p({
          modelValue: dialogVisible.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a251f695"], ["__file", "C:/Users/唐/Desktop/扫码点餐/点餐/pages/shop/store/components/rightContent.vue"]]);
wx.createComponent(Component);
