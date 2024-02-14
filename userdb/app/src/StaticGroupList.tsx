import { useState } from "react"

import { arrayMove } from "@react-workshop/utils"

import { Header } from "./Header"
import { staticGroups } from "./staticGroups"

export const StaticGroupList = () => {
	const [groups, setGroups] = useState(staticGroups)

	const moveGroup = (fromIndex: number, toIndex: number) => {
		const newGroups = arrayMove(groups, fromIndex, toIndex)
		setGroups(newGroups)
	}

	return (
		<>
			<Header>LIST </Header>
			<ul>
				{groups.map((group, index) => {
					return (
						<li key={group.id}>
							{group.id} - {group.displayName}
							<button onClick={() => moveGroup(index, index - 1)}> Move up</button>
							<button onClick={() => moveGroup(index, index + 1)}> Move down</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}
