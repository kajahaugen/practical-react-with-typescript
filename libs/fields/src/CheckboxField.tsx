import styled from "@emotion/styled"
import { useId } from "react"

import { FieldContainer, LabelAfter } from "./FieldStyles"

const FlexFieldContainer = styled(FieldContainer)`
	display: flex;
	align-items: center;
`

export interface CheckboxFieldProps {
	value: boolean
	onChange: (newValue: boolean) => unknown

	label: string
	disabled?: boolean
}

export const CheckboxField = ({ value, onChange, label, disabled }: CheckboxFieldProps) => {
	const id = useId()

	return (
		<FlexFieldContainer>
			<input
				id={id}
				type="checkbox"
				checked={value}
				onChange={(event) => onChange(event.currentTarget.checked)}
				disabled={disabled}
			/>
			<LabelAfter htmlFor={id}>{label}</LabelAfter>
		</FlexFieldContainer>
	)
}
