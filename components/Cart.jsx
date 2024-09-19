"use client"
import CartProduct from "./CartProduct"
import { useSelector } from "react-redux"

export default function Cart() {
  const cartItems = useSelector((state) => state.cart)
  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty
  }, 0)
  console.log(cartItems)
  return (
    <div>
      <h2>Your cart</h2>
      <h2>Product</h2>
      <h2>Quantity</h2>
      <h2>Price</h2>
      <div className='flex flex-col space-y-4'>
        {cartItems.map((item, i) => {
          return <CartProduct key={i} cartItem={item} />
        })}
      </div>
      <span className='text-info'>Subtotal: ${totalPrice}</span>
    </div>
  )
}
