import { useState } from "react"

import { NumericField, TextField } from "@prwt/fields"

import { ClickUntil } from "./ClickUntil"

export interface ClickUntilFormProps {}

export const ClickUntilForm = (props: ClickUntilFormProps) => {
	const [message, setMessage] = useState("Limit reached")
	const [limit, setLimit] = useState(15)

	return (
		<div>
			<TextField label="Message" value={message} onChange={setMessage} />
			<NumericField label="Limit" value={limit} onChange={setLimit} />
			<ClickUntil limitMessage={message} limit={limit} />
		</div>
	)
}
