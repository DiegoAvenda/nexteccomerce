import React from "react"
import Link from "next/link"
import CartLenght from "../../../components/CartLength"
import ProducList from "../../../components/ProductList"
import { getData } from "../../../lib/getData"

async function Products() {
  const products = (await getData("https://fakestoreapi.com/products")) ?? []
  return (
    <div>
      <h2>Products</h2>

      <Link href='/cart'>
        View Cart (<CartLenght />)
      </Link>
      <ProducList products={products} />
    </div>
  )
}

export default Products
