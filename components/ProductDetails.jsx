"use client"
import React from "react"
import { addToCart } from "../redux/slices/cartSlice"
import { useDispatch } from "react-redux"
import Image from "next/image"

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
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <button onClick={() => handleAddToCart()}>Add</button>
    </div>
  )
}

export default ProductDetails
