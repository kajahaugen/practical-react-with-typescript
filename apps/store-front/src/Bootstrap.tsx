import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import { ProvideStoreService } from "@prwt/store-service"

import { ProvideReactQuery } from "./ProvideReactQuery"

export interface BootstrapProps {
	children?: ReactNode
}

export const Bootstrap = ({ children = <Outlet /> }: BootstrapProps) => {
	return (
		<ProvideStoreService baseUrl="http://localhost:4210">
			<ProvideReactQuery>{children}</ProvideReactQuery>
		</ProvideStoreService>
	)
}
