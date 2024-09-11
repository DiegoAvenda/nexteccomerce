import { createSlice } from "@reduxjs/toolkit"

//create initial state
const initialState = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    qty: 1,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    qty: 1,
  },
]

//create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload
      //check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === id)

      if (existingItem) {
        //if the item exists, update the quantity
        existingItem.qty += 1
      } else {
        // If the item doesn't exist, add it to the cart
        state.push({ id, title, price, qty: 1, image })
      }
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
  },
})
