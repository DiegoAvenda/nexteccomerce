"use client"
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/cartSlice"
import Image from "next/image"
import { useDispatch } from "react-redux"

export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch()
  function handleRemoveCartItem(cartId) {
    dispatch(removeFromCart(cartId))
  }
  function handleIncrementQty(cartId) {
    dispatch(incrementQty(cartId))
  }
  function handleDecrementQty(cartId) {
    dispatch(decrementQty(cartId))
  }
  return (
    <div>
      <Image
        src={cartItem.image}
        width={249}
        height={249}
        alt={cartItem.title}
      />
      <h2>{cartItem.title}</h2>
      <button onClick={() => handleDecrementQty(cartItem.id)}>-</button>
      <p>{cartItem.qty ?? 1}</p>
      <button onClick={() => handleIncrementQty(cartItem.id)}>+</button>
      <h4>${cartItem.price}</h4>
      <button onClick={() => handleRemoveCartItem(cartItem.id)}>Remove</button>
    </div>
  )
}
