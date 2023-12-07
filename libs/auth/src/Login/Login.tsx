import { ProvideFieldsService } from "@prwt/fields"

import { useMutateLogin } from "../authData"

import { LoginForm } from "./LoginForm"

export const Login = () => {
	const { mutate, isPending } = useMutateLogin()
	const onLogin = (username: string, password: string) => {
		mutate({ username, password })
	}

	const onCancel = () => {
		console.log("cancelled login")
	}

	return (
		<ProvideFieldsService disabled={isPending}>
			<LoginForm onLogin={onLogin} onCancel={onCancel} />
		</ProvideFieldsService>
	)
}
