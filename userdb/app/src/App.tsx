import { LoginForm } from "./LoginForm"
import { StaticGroupList } from "./StaticGroupList"
import { StaticGroupTable } from "./StaticGroupTable"

const onLogin = (username: string, password: string) => {
	console.log("username: " + username, "password: " + password)
}

export const App = () => {
	// const [value, setValue] = useState("")
	// const [name, setName] = useState("")
	// const [password, setPassword] = useState("")
	// const [state, setState] = useState(Boolean)

	return (
		<div>
			<LoginForm onLogin={onLogin}></LoginForm>
			<br />
			<StaticGroupList></StaticGroupList>
			<StaticGroupTable></StaticGroupTable>
			{/* <Header>{value}</Header>
			<TextField label="Header text" value={value} onChange={setValue}></TextField>
			<hr /> */}
			{/* <Header> Navn </Header>
			<TextField label="Navn" variant="text" value={name} onChange={setName}></TextField>

			<Header> Passord </Header>
			<PasswordField label="password" value={password} onChange={setPassword}></PasswordField>

			<br />
			<Header> Checkbox </Header>
			<CheckboxField
				label="state"
				value={state}
				onChange={setState}
				disabled={false}
			></CheckboxField> */}

			{/* <div>
				<Header> Passord </Header>
				<TextField label="Navn" variant="text" value={name} onChange={setName}></TextField>
				<TextField
					maxLength={9}
					label="Passord"
					variant="password"
					value={password}
					onChange={setPassword}
				></TextField>
				<br />
				<button> Logg inn </button>
			</div> */}
		</div>

		//Hello world 👋
	)
}

//REACT KOMPONENT I SIN ENKLESTE TILSTAND
// export const AppWithoutJsx = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("hr"),
// 		React.createElement("h1", {}, "Hello wold 👋"),
// 		React.createElement("hr")
// 	)
// }
