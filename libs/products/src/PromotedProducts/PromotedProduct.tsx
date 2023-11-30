import styled from "@emotion/styled"

import { Product } from "../products"

const ListItem = styled.li`
	flex: 0 0 0;
	width: 0;
	padding: 0px 12px 12px;
	border-radius: 4px;
	margin: 8px;
	box-shadow: 0 0 4px #909090;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	&:hover {
		background: #f0f0f0;
	}

	img {
		display: block;
	}

	div {
		text-align: center;
		padding-top: 8px;
		&:last-child {
			margin-top: auto;
		}
	}
`

export interface PromotedProductProps {
	product: Product
}

export const PromotedProduct = ({ product }: PromotedProductProps) => {
	const imageUrl = `https://picsum.photos/seed/${product.id}/600/200`
	return (
		<ListItem>
			<img src={imageUrl} alt="Product" />
			<div>{product.title}</div>
			<div>{product.price} NOK</div>
		</ListItem>
	)
}
