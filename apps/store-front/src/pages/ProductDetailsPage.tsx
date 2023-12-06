import { useMemo } from "react"
import { useParams } from "react-router-dom"

import { ProductDetails, productResults } from "@prwt/products"

export const ProductDetailsPage = () => {
	const { productId } = useParams<"productId">()
	const product = useMemo(() => {
		if (!productId) return undefined
		return productResults.results.find((product) => product.id === productId)
	}, [productId])

	if (!product) {
		return <p>This product doesn't exist</p>
	}

	return <ProductDetails product={product} />
}
