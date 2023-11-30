import { useState } from "react"

export interface ClickUntilProps {
	message?: string
	limit?: number
	bypassLimit?: boolean
}

export const ClickUntil = ({
	message = "Limit reached",
	limit = 10,
	bypassLimit = false
}: ClickUntilProps) => {
	const [count, setCount] = useState(0)
	const isLimitReached = count >= limit

	const increment = () => {
		setCount(count + 1)
	}
	const resetCount = () => {
		setCount(0)
	}

	return (
		<>
			<button onClick={increment} disabled={isLimitReached && !bypassLimit}>
				Click me!
			</button>
			<p>
				{isLimitReached && !bypassLimit && message}
				{isLimitReached && bypassLimit && `${message} - ${count}`}
				{!isLimitReached && count}
			</p>
			{isLimitReached && <button onClick={resetCount}>Reset</button>}
		</>
	)
}
