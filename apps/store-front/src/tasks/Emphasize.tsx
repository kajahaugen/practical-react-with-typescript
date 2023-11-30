import styled from "@emotion/styled"
import { ReactNode } from "react"

interface ContainerStyleProps {
	borderSize: number
}
const Container = styled.div<ContainerStyleProps>`
	background: linear-gradient(270deg, #132ca9, #bc1411);
	background-size: 400% 400%;
	animation: move 1s ease infinite;
	border-radius: 16px;
	margin: 8px;
	padding: ${({ borderSize }) => borderSize}px;
	box-shadow: 0 0 10px #535353;

	@keyframes move {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`
const InnerContainer = styled.div`
	background-color: #fff;
	border-radius: 8px;
	padding: 8px 12px;
	box-shadow: inset 0 0 10px #000000;
`

export interface EmphasizeProps {
	borderSize?: number
	children: ReactNode
}

export const Emphasize = ({ borderSize = 16, children }: EmphasizeProps) => {
	return (
		<Container borderSize={borderSize}>
			<InnerContainer>{children}</InnerContainer>
		</Container>
	)
}
