import { useState } from "react"

import { IProduct } from "@prwt/generated/store-api"
import { ProductsTable } from "@prwt/products"

export const ProductsPage = () => {
	const [products, setProducts] = useState<IProduct[]>([])

	const deleteProduct = (productToDelete: IProduct) => {
		setProducts(products.filter((product) => product.id !== productToDelete.id))
	}

	return <ProductsTable products={[]} onDelete={deleteProduct} />
}
