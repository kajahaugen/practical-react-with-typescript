import styled from "@emotion/styled"
import { ChangeEvent, useId } from "react"

import { useFieldsService } from "../FieldsService"

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 4px;
`
const Label = styled.label`
	padding-left: 4px;
`

export interface BooleanFieldProps {
	value?: boolean
	onChange: (newValue: boolean) => unknown

	label: string
}

export const BooleanField = ({
	value = false,
	onChange,
	label
}: BooleanFieldProps) => {
	const id = useId()
	const { isDisabled } = useFieldsService()

	const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.checked)
	}

	return (
		<Container>
			<input
				id={id}
				type="checkbox"
				checked={value}
				onChange={onInputChange}
				disabled={isDisabled}
			/>
			<Label htmlFor={id}>{label}</Label>
		</Container>
	)
}
