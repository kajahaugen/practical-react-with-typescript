import { maxLength } from "class-validator"
import { useState } from "react"

import { Header } from "./Header"
import { TextField, TextFieldProps } from "./TextField"

export type PasswordFieldProps = Omit<TextFieldProps, "variant">

export const PasswordField = (props: PasswordFieldProps) => {
	return <TextField variant="password" {...props}></TextField>
}
