import { useMutateLogin } from "../authData"

import { LoginForm } from "./LoginForm"

export const Login = () => {
	const { mutate } = useMutateLogin()
	const onLogin = (username: string, password: string) => {
		mutate({ username, password })
	}

	return <LoginForm onLogin={onLogin} />
}
