"use strict";
const goodsList = [
  {
    id: 1,
    goodsClassName: "手机数码",
    // 商品大类
    children: [
      {
        id: "1-1",
        // id
        title: "商品名称1",
        // 商品名称
        price: "100",
        // 价格
        crossedRice: "110",
        // 划线价格
        discountNum: 8.2,
        // 折扣
        salesVolume: 99,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: true,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-2",
        // id
        title: "商品名称2",
        // 商品名称
        price: "200",
        // 价格
        crossedRice: "210",
        // 划线价格
        discountNum: 9.2,
        // 折扣
        salesVolume: 88,
        // 销量
        imitNum: 2,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 1,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "1-3",
        // id
        title: "商品名称3",
        // 商品名称
        price: "300",
        // 价格
        crossedRice: "310",
        // 划线价格
        discountNum: 8.5,
        // 折扣
        salesVolume: 95,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      }
    ]
  },
  {
    id: 2,
    goodsClassName: "服装鞋帽",
    // 商品大类
    children: [
      {
        id: "2-1",
        // id
        title: "商品名称1",
        // 商品名称
        price: "150",
        // 价格
        crossedRice: "160",
        // 划线价格
        discountNum: 7.2,
        // 折扣
        salesVolume: 100,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "2-2",
        // id
        title: "商品名称2",
        // 商品名称
        price: "250",
        // 价格
        crossedRice: "260",
        // 划线价格
        discountNum: 8.2,
        // 折扣
        salesVolume: 90,
        // 销量
        imitNum: 2,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "2-3",
        // id
        title: "商品名称3",
        // 商品名称
        price: "350",
        // 价格
        crossedRice: "360",
        // 划线价格
        discountNum: 7.5,
        // 折扣
        salesVolume: 105,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      }
    ]
  },
  {
    id: 3,
    goodsClassName: "家居用品",
    // 商品大类
    children: [
      {
        id: "3-1",
        // id
        title: "商品名称1",
        // 商品名称
        price: "180",
        // 价格
        crossedRice: "190",
        // 划线价格
        discountNum: 7.8,
        // 折扣
        salesVolume: 110,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "3-2",
        // id
        title: "商品名称2",
        // 商品名称
        price: "280",
        // 价格
        crossedRice: "290",
        // 划线价格
        discountNum: 8.3,
        // 折扣
        salesVolume: 95,
        // 销量
        imitNum: 2,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      },
      {
        id: "3-3",
        // id
        title: "商品名称3",
        // 商品名称
        price: "380",
        // 价格
        crossedRice: "390",
        // 划线价格
        discountNum: 7.6,
        // 折扣
        salesVolume: 100,
        // 销量
        imitNum: 1,
        // 限购
        specificationShow: false,
        // 规格显示
        purchaseQuantity: 0,
        // 购买数量
        goodsImg: "https://img14.360buyimg.com/n0/jfs/t1/19262/18/1096/100000/5f17365bE5599903a/90889b380908609e.jpg"
        // 商品图片
      }
    ]
  }
];
const goodsNavBar = [
  {
    id: 1,
    goodsClassName: "手机数码"
    // 商品大类
  },
  {
    id: 2,
    goodsClassName: "服装鞋帽"
    // 商品大类
  },
  {
    id: 3,
    goodsClassName: "家居用品"
    // 商品大类
  }
];
exports.goodsList = goodsList;
exports.goodsNavBar = goodsNavBar;
