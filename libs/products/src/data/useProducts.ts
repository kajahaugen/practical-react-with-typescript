import { useQuery } from "@tanstack/react-query"

import { IGetProductsOptions } from "@prwt/generated/store-api"
import { useStoreService } from "@prwt/store-service"

export const useProducts = (options: IGetProductsOptions = {}) => {
	const { productsClient } = useStoreService()
	return useQuery({
		queryKey: ["products", "query", options],
		staleTime: 1000 * 60,
		queryFn: () =>
			productsClient.getProducts(
				options.query,
				options.category,
				options.count,
				options.offset,
				options.sortBy,
				options.sortDirection
			)
	})
}
