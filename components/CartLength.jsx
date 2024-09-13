"use client"
import { useSelector } from "react-redux"

export default function CartLenght() {
  const cartItems = useSelector((state) => state.cart)
  const cartLenght = cartItems.length
  return <span>{cartLenght}</span>
}
