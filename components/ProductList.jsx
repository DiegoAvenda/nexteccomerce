"use client"
import Product from "./Product"
export default function ProducList({ products }) {
  return (
    <div>
      {products.map((product, i) => {
        return <Product key={i} product={product} />
      })}
    </div>
  )
}
