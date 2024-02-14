// import React from "react"

import { useId } from "react"

// import { TextField, TextFieldProps } from "./TextField"

// export type CheckboxFieldProps = Omit<TextFieldProps, "variant">

// export const CheckboxField = (props: CheckboxFieldProps) => {
// 	return <TextField variant="checkbox" {...props}></TextField>
// }

export interface CheckboxFieldProps {
	label: string
	disabled?: boolean

	value: boolean
	onChange: (newValue: boolean) => unknown
}

export const CheckboxField = ({ value, onChange, label, disabled }: CheckboxFieldProps) => {
	const id = useId()
	return (
		<>
			<input
				type="checkbox"
				checked={value}
				onChange={(event) => onChange(event.currentTarget.checked)}
				disabled={disabled}
			/>{" "}
			<label htmlFor={id}>{label}</label>
		</>
	)
}
