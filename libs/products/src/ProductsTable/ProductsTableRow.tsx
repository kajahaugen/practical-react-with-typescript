import { Link } from "react-router-dom"

import { Product } from "../products"

export interface ProductsTableRowProps {
	product: Product
}

export const ProductsTableRow = ({ product }: ProductsTableRowProps) => {
	const { title, price, category, rating, nrOfRatings } = product
	return (
		<tr>
			<td>
				<Link to={`/products/${product.id}`}>{title}</Link>
			</td>
			<td>{price}</td>
			<td>{category}</td>
			<td>
				{rating} ({nrOfRatings})
			</td>
		</tr>
	)
}
