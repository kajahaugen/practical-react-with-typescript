import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

const StyledLink = styled(NavLink)`
	display: block;
	&.active {
		font-weight: bold;
	}
`

export const Nav = () => {
	return (
		<>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/fields">Fields</StyledLink>
			<StyledLink to="/loader">Loader</StyledLink>
			<StyledLink to="/clickUntil">Click Until Form</StyledLink>
			<StyledLink to="/productsTable">Products table</StyledLink>
		</>
	)
}
