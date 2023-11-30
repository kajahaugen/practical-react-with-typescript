import { useState } from "react"

import { Product, ProductsTable, productResults } from "@prwt/products"

export const ProductsPage = () => {
	const [products, setProducts] = useState(productResults.results)

	const deleteProduct = (productToDelete: Product) => {
		setProducts(products.filter((product) => product.id !== productToDelete.id))
	}

	return <ProductsTable products={products} onDelete={deleteProduct} />
}
