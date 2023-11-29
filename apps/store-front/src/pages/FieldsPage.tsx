import { useState } from "react"

import { BooleanField, NumericField, TextField } from "@prwt/fields"

import { ClickUntil } from "../ClickUntil"

export const FieldsPage = () => {
	const [textValue, setTextValue] = useState<string>()
	const [numberValue, setNumberValue] = useState<number>()
	const [useRangeForNumberField, setUseRangeForNumberField] =
		useState<boolean>()

	return (
		<>
			<TextField label="Text field" value={textValue} onChange={setTextValue} />
			<NumericField
				label="Number field"
				value={numberValue}
				onChange={setNumberValue}
				max={useRangeForNumberField ? 42 : 100}
			/>
			<BooleanField
				label="Use range for number field"
				value={useRangeForNumberField}
				onChange={setUseRangeForNumberField}
			/>
			<ClickUntil limitMessage={textValue} limit={numberValue} />
		</>
	)
}
