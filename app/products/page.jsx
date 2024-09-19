import React from "react"
import ProducList from "../../components/ProductList"
import { products } from "../../products"

async function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ProducList products={products} />
    </div>
  )
}

export default Products
