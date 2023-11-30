import { ProductsTable, productResults } from "@prwt/products"

export const ProductsPage = () => {
	return <ProductsTable products={productResults.results} />
}
