import { addToCart } from "../redux/slices/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function Product({ product }) {
  const dipatch = useDispatch()
  function handleAddToCart() {
    console.log(product)
    dispatchEvent(addToCart(product))
  }
  return (
    <div>
      <Image src={product.image} alt={product.title} width={556} height={556} />
      <Link href={`/products/${product.slug}`}>{product.title}</Link>
      <p>$ {product.price}</p>
      <button onClick={() => handleAddToCart()}>Add</button>
    </div>
  )
}
