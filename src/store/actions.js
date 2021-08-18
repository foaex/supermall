import { ADD_TO_CART, ADD_COUNTER } from "./mutations-types";

export default {
  addCart (context, payload) {
    return new Promise((resolve) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve("当前商品数量加1")
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve("成功添加到购物车")
      }
    })
  }
}