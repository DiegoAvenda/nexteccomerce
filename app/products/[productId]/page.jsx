import ProductDetails from "../../../components/ProductDetails"
import { getData } from "../../../lib/getData"

export default async function ProductDetailsPage({ params }) {
  const product =
    (await getData(`https://fakestoreapi.com/products/${params.productId}`)) ??
    {}

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}
