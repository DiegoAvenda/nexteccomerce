"use client"
import Product from "./Product"
export default function ProducList({ products }) {
  return (
    <div className='flex flex-col space-y-4'>
      {products.map((product, i) => {
        return <Product key={i} product={product} />
      })}
    </div>
  )
}
