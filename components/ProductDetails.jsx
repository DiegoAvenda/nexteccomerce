"use client"
import React from "react"
import { addToCart } from "../redux/slices/cartSlice"
import { useDispatch } from "react-redux"

function ProductDetails({ product }) {
  const dispatch = useDispatch()
  function handleAddToCart() {
    console.log(product)
    dispatch(addToCart(product))
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={() => handleAddToCart()}>Add</button>
    </div>
  )
}

export default ProductDetails
