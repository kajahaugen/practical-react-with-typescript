import { useId } from "react"

import { Container, Input, Label } from "./fieldComponents"

export interface NumericFieldProps {
	label: string
	value: number
	onChange: (newValue: number) => unknown

	min?: number
	max?: number
	allowDecimals?: boolean
}

export const NumericField = ({
	label,
	value,
	onChange,
	min = 0,
	max = 100,
	allowDecimals = false
}: NumericFieldProps) => {
	const id = useId()
	const useRange = Math.abs(max - min) < 10 && !allowDecimals

	const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		onChange(evt.target.valueAsNumber)
	}

	return (
		<Container>
			<Label htmlFor={id}>{label}</Label>
			<Input
				min={min}
				max={max}
				type={useRange ? "range" : "number"}
				value={value}
				onChange={onValueChange}
			/>
		</Container>
	)
}