import { useState } from "react"

export const HelloWorld = () => {
	const [inputValue, setInputValue] = useState("hei!🚀")

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(evt.target.value)
	}

	return (
		<div>
			<label htmlFor="test">Label</label>
			<input
				id="test"
				value={inputValue}
				onChange={onInputChange}
				type="text"
			/>
		</div>
	)
}
