import { useState } from "react"

import { BooleanField, NumericField, TextField } from "@prwt/fields"

import { ClickUntil } from "./ClickUntil"

export interface ClickUntilFormProps {}

export const ClickUntilForm = (props: ClickUntilFormProps) => {
	const [message, setMessage] = useState("Limit reached")
	const [limit, setLimit] = useState(15)
	const [skipLimit, setSkipLimit] = useState(false)

	return (
		<div>
			<TextField label="Message" value={message} onChange={setMessage} />
			<NumericField label="Limit" value={limit} onChange={setLimit} />
			<BooleanField
				label="Skip limit"
				value={skipLimit}
				onChange={setSkipLimit}
			/>
			<ClickUntil message={message} limit={limit} skipLimit={skipLimit} />
		</div>
	)
}
