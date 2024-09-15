"use client"
import CartProduct from "../../../components/CartProduct"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

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
      {cartItems.map((item, i) => {
        return <CartProduct key={i} cartItem={item} />
      })}
      <h2>Cart total</h2>
      <span>Subtotal</span>
      <span>${totalPrice}</span>
    </div>
  )
}
