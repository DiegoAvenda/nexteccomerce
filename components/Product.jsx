import { addToCart } from "../redux/slices/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function Product({ product }) {
  const dispatch = useDispatch()
  function handleAddToCart() {
    dispatch(addToCart(product))
  }
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className='card-body'>
        <Link href={`/products/${product.id}`}>
          <h2 className='card-title'>{product.name}</h2>
        </Link>
        <p>$ {product.price}</p>
        <div className='card-actions justify-end'>
          <button onClick={() => handleAddToCart()} className='btn btn-primary'>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
