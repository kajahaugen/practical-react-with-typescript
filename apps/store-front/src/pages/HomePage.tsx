import { PromotedProducts, productResults } from "@prwt/products"

const promotedProducts = productResults.results.slice(0, 3)

export const HomePage = () => {
	return <PromotedProducts products={promotedProducts} />
}
