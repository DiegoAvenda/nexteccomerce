import { createSlice } from "@reduxjs/toolkit"

//create initial state
const initialState = []

//create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload
      //check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === id)

      if (existingItem) {
        //if the item exists, update the quantity
        existingItem.qty += 1
      } else {
        // If the item doesn't exist, add it to the cart
        state.push({ id, name, price, qty: 1, image })
      }
      console.log(state)
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload
      return state.filter((item) => item.id !== cartId)
    },
    incrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find((item) => item.id === cartId)
      if (cartId) {
        cartItem.qty += 1
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload
      const cartItem = state.find((item) => item.id === cartId)
      if (cartId && cartItem.qty > 1) {
        cartItem.qty -= 1
      }
    },
  },
})

//export the reducers (actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions
export default cartSlice.reducer
