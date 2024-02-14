import { FormEvent, useState } from "react"

import { CheckboxField } from "./CheckboxField"
import { Header } from "./Header"
import { PasswordField } from "./PasswordField"
import { TextField } from "./TextField"

export interface LoginFormProps {
	disabled?: boolean
	onLogin: (username: string, password: string) => unknown
}

export const LoginForm = ({ disabled, onLogin }: LoginFormProps) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [isPasswordVisible, setIsPasswordVisible] = useState(Boolean)

	const hasUsernameAndPassword = username.length > 0 && password.length > 0
	const showPassword = isPasswordVisible ? "text" : "password"

	const submitLogin = (event: FormEvent) => {
		event.preventDefault()
		if (!hasUsernameAndPassword) return
		onLogin(username, password)
	}
	return (
		<form onSubmit={submitLogin}>
			<Header> Navn </Header>
			<TextField label="User name" value={username} onChange={setUsername}></TextField>

			<Header> Passord </Header>
			<TextField
				variant={showPassword}
				label="password"
				value={password}
				onChange={setPassword}
			></TextField>
			<div> password output: {isPasswordVisible ? <p> {password}</p> : ""}</div>

			<br />
			<CheckboxField
				label="Show password"
				value={isPasswordVisible}
				onChange={setIsPasswordVisible}
				disabled={false}
			></CheckboxField>

			<button disabled={!hasUsernameAndPassword}>Log in</button>
		</form>
	)
}
