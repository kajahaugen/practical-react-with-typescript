import { useQuery } from "@tanstack/react-query"

import { UsersList } from "./UsersList"
import { User } from "./testUser"

const fetchData = async () => {
	const response = await fetch(`http://localhost:4210/users`)
	const body: User[] = await response.json()
	return body
}

export const ServerUsersList = () => {
	const result = useQuery({
		queryKey: ["users"],
		staleTime: 5000,
		queryFn: fetchData
	})

	if (result.isLoading) {
		return <p>Loading...</p>
	}

	if (result.isError) {
		return (
			<p>
				The request failed. Click{" "}
				<button onClick={() => result.refetch()}>here</button> to try again.
			</p>
		)
	}

	return <UsersList users={result.data} />
}

// export const ServerUsersList = () => {
// 	const [users, setUsers] = useState<User[]>([])
// 	useEffect(() => {
// 		const fetchFromServer = async () => {
// 			const userList = await fetchData()
// 			setUsers(userList)
// 		}
// 		fetchFromServer()
// 	}, [])

// 	return <UsersList users={users} />
// }
