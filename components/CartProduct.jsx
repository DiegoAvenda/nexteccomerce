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
    <div className='card card-compact bg-base-100 shadow-xl'>
      <figure>
        <Image
          src={cartItem.image}
          width={100}
          //height={100}
          alt={cartItem.name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{cartItem.name}</h2>
        <p>QTY: {cartItem.qty ?? 1}</p>
        <h4>${cartItem.price}</h4>
        <div className='card-actions justify-end'>
          <button
            className='btn btn-xs btn-primary'
            onClick={() => handleDecrementQty(cartItem.id)}
          >
            -
          </button>
          <button
            className='btn btn-xs btn-primary'
            onClick={() => handleIncrementQty(cartItem.id)}
          >
            +
          </button>
          <button
            className='btn btn-xs btn-primary'
            onClick={() => handleRemoveCartItem(cartItem.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
