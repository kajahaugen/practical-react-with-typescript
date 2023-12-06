import { ReactNode, useState } from "react"

export interface ToggleComponentProps {
	a: ReactNode
	b: ReactNode
}

export const ToggleComponent = ({ a, b }: ToggleComponentProps) => {
	const [visibleComponent, setVisibleComponent] = useState<"a" | "b">("a")

	const toggleVisibleComponent = () => {
		setVisibleComponent(visibleComponent === "a" ? "b" : "a")
	}

	return (
		<div>
			<button onClick={toggleVisibleComponent}>
				Toggle {visibleComponent}
			</button>
			<hr />
			{visibleComponent === "a" ? a : b}
		</div>
	)
}
