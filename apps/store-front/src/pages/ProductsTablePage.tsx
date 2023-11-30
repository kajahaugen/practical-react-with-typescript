import { ProductsTable, productResults } from "@prwt/products"

export const ProductsTablePage = () => {
	return <ProductsTable products={productResults.results} />
}
