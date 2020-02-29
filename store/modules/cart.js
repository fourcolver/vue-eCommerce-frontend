import products from '../../data/products'

const state = {
  products: products.data,
  cart: []
}
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.price * product.quantity)
    }, 0)
  }
}
// mutations
const mutations = {
  addToCart: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const cartItems = state.cart.find(item => item.id === payload.id)
    console.log('payload.quantity', payload.quantity)
    const qty = payload.quantity ? payload.quantity : 1
    if (cartItems) {
      cartItems.quantity = qty
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      })
    }
    product.stock--
  },
  updateCartQuantity: (state, payload) => {
    // Calculate Product stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {
          // state.cart.push({
          //   ...product,
          //   quantity: qty
          // })
        }
        return true
      }
    })
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload)
    state.cart.splice(index, 1)
  }
}
// actions
const actions = {
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
    context.commit('removeCartItem', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
