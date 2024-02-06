import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const StyledNavLink = styled(NavLink)`
	display: block;
	margin-bottom: 8px;
	text-decoration: none;
	&.active {
		font-weight: bold;
		text-decoration: underline;
	}
`

export const MainMenu = () => {
	return (
		<>
			<StyledNavLink to="/">Home</StyledNavLink>
			<StyledNavLink to="/users" end>
				Users
			</StyledNavLink>
			<StyledNavLink to="/users/67dc12eb-81dc-4a4a-9fe0-12cee1d11674">Single user</StyledNavLink>
			<StyledNavLink to="/groups">Groups</StyledNavLink>
			<StyledNavLink to="/fields">Fields</StyledNavLink>
		</>
	)
}