import { useId } from "react"

interface TextInputProps {
	label: string
	value: string
	onChange: (newValue: string) => unknown
}

export const TextInput = (props: TextInputProps) => {
	const id = useId()

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(evt.target.value)
	}

	return (
		<div>
			<label htmlFor={id}>{props.label}</label>
			<input id={id} value={props.value} onChange={onInputChange} type="text" />
		</div>
	)
}
