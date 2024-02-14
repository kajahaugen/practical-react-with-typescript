import { useId } from "react"

export interface TextFieldProps {
	label: string
	diabled?: boolean
	variant?: "text" | "password" | "checkbox"
	maxLength?: number
	hide?: boolean
	value: string
	onChange: (newValue: string) => unknown
}

export const TextField = ({
	label,
	diabled,
	variant = "text",
	value,
	maxLength,
	hide = false,
	onChange
}: TextFieldProps) => {
	const id = useId()
	//const [value, onChange] = useState<string>() slik kan den også være udefinert

	const clear = () => {
		onChange("")
	}

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={variant ?? "text"}
				value={value}
				disabled={diabled}
				maxLength={maxLength}
				onChange={(event) => onChange(event.currentTarget.value)}
			/>
			<button hidden={hide} onClick={clear}>
				clear
			</button>
		</>
	)
}
