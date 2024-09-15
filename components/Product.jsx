import { addToCart } from "../redux/slices/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function Product({ product }) {
  const dispatch = useDispatch()
  function handleAddToCart() {
    console.log(product)
    dispatch(addToCart(product))
  }
  return (
    <div className='rounded-lg mr-3  bg-white dark:bg-slate-900 overflow-hidden border shadow'>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className='w-full h-48 object-cover'
      />
      <Link href={`/products/${product.id}`}>{product.title}</Link>
      <p>$ {product.price}</p>
      <button onClick={() => handleAddToCart()}>Add</button>
    </div>
  )
}
