import { useState } from "react"

import { BooleanField, NumericField, TextField } from "@prwt/fields"

import { ClickUntil } from "./ClickUntil"

export const ClickUntilForm = () => {
	const [message, setMessage] = useState("Limit reached")
	const [limit, setLimit] = useState(15)
	const [bypassLimit, setBypassLimit] = useState(false)

	return (
		<div>
			<TextField label="Message" value={message} onChange={setMessage} />
			<NumericField label="Limit" value={limit} onChange={setLimit} />
			<BooleanField
				label="Bypass limit"
				value={bypassLimit}
				onChange={setBypassLimit}
			/>
			<ClickUntil message={message} limit={limit} bypassLimit={bypassLimit} />
		</div>
	)
}
