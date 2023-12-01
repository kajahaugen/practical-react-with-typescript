import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { ILoginRequest, LoginRequest } from "@prwt/generated/store-api"
import { useStoreService } from "@prwt/store-service"

export const authKeys = {
	all: ["auth"] as const,
	session: () => [...authKeys.all, "session"] as const
}

export const useUserSession = () => {
	const { authClient } = useStoreService()
	return useQuery({
		queryKey: authKeys.session(),
		queryFn: () => authClient.getSession()
	})
}

export const useMutateLogin = () => {
	const { authClient } = useStoreService()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (login: ILoginRequest) =>
			authClient.login(new LoginRequest(login)),
		onSuccess: (data) => {
			queryClient.setQueryData(authKeys.session(), data)
		}
	})
}

export const useMutateLogout = () => {
	const { authClient } = useStoreService()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: () => authClient.logout(),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: authKeys.session()
			})
		}
	})
}
