import { User } from "./testUser"

export interface UsersListProps {
	users: User[]
}

export const UsersList = (props: UsersListProps) => {
	const sortedUsers = props.users.sort()

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>User name</th>
					<th>First name</th>
				</tr>
			</thead>
			<tbody>
				{props.users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.userName}</td>
						<td>{user.firstName}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
