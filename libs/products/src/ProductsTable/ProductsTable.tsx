import { Product } from "../products"

import { ProductsTableRow } from "./ProductsTableRow"

export interface ProductsTableProps {
	products: Product[]
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Price</th>
					<th>Category</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<ProductsTableRow key={product.id} product={product} />
				))}
			</tbody>
		</table>
	)
}
