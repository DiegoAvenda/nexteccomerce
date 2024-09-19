import ProductDetails from "../../../components/ProductDetails"
import { products } from "../../../products"

export default async function ProductDetailsPage({ params }) {
  const product = products[params.productId - 1]
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}
