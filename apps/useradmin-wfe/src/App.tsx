import { ProvideReactQuery } from "./ProvideReactQuery"
import { ServerUsersList } from "./ServerUsersList"

export const App = () => {
	return (
		<ProvideReactQuery>
			<ServerUsersList />
		</ProvideReactQuery>
	)
}
