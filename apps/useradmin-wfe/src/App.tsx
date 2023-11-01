import { useState } from "react"

import { TextInput } from "./TextInput"

export const App = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")

	return (
		<>
			<TextInput label="First name" value={firstName} onChange={setFirstName} />
			<TextInput label="Last name" value={lastName} onChange={setLastName} />
			<p>
				Hei {firstName} {lastName}!
			</p>
		</>
	)
}
