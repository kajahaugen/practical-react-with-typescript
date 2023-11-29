import { useState } from "react"

export interface ClickUntilProps {
	limitMessage?: string
	limit?: number
}

export const ClickUntil = ({
	limitMessage = "Limit reached",
	limit = 15
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
			<button onClick={increment}>Click me!</button>
			<p>{isLimitReached ? limitMessage : count}</p>
			{isLimitReached && <button onClick={resetCount}>Reset</button>}
		</>
	)
}
