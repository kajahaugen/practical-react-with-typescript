import { Navigate, Outlet, RouteObject, createBrowserRouter } from "react-router-dom"

import { Header, MainLayout } from "@react-workshop/ui"
import { RequireRoles } from "@react-workshop/userdb-libs-auth"

import { Bootstrap } from "./Bootstrap"
import { MainMenu } from "./MainMenu"
import { ApiStatusPage } from "./pages/ApiStatusPage"
import { ErrorPage } from "./pages/ErrorPage"
import { FieldsPage } from "./pages/FieldsPage"
import { GroupsPage } from "./pages/GroupsPage"
import { HomePage } from "./pages/HomePage"
import { OptimizationPage } from "./pages/OptimizationPage"
import { AuthServiceLoginPage, BasicLoginPage, DataServiceLoginPage } from "./pages/login"

const appRoutes: RouteObject[] = [
	{
		index: true,
		element: <HomePage />
	},
	{
		path: "login",
		children: [
			{
				path: "basic",
				children: [
					{
						index: true,
						element: <BasicLoginPage />
					}
				]
			},
			{
				path: "data-service",
				children: [
					{
						index: true,
						element: <DataServiceLoginPage />
					}
				]
			},
			{
				path: "auth-service",
				children: [
					{
						index: true,
						element: <AuthServiceLoginPage />
					}
				]
			}
		]
	},
	{
		path: "users",
		element: (
			<RequireRoles roles={["User", "UserAdmin"]} onMissingRoles={<Navigate to="/" />}>
				<Outlet />
			</RequireRoles>
		),
		children: [
			{
				index: true,
				lazy: async () => {
					const { UsersPage } = await import("./pages/UsersPage")
					return { Component: UsersPage }
				}
			},
			{
				path: ":userId",
				lazy: async () => {
					const { UsersPage } = await import("./pages/UsersPage")
					return { Component: UsersPage }
				}
			}
		]
	},
	{
		path: "groups",
		element: (
			<RequireRoles onMissingRoles={<Navigate to="/" />}>
				<Outlet />
			</RequireRoles>
		),
		children: [
			{
				index: true,
				element: <GroupsPage />
			}
		]
	},
	{
		path: "status",
		element: (
			<RequireRoles roles={["Admin"]} onMissingRoles={<Navigate to="/" />}>
				<ApiStatusPage />
			</RequireRoles>
		)
	},
	{
		path: "optimization",
		element: <OptimizationPage />
	},
	{
		path: "fields",
		element: <FieldsPage />
	}
]

export const router = createBrowserRouter([
	{
		element: (
			<Bootstrap>
				<MainLayout header={<Header />} menu={<MainMenu />} />
			</Bootstrap>
		),
		errorElement: (
			<Bootstrap>
				<MainLayout header={<Header />} menu={<MainMenu />}>
					<ErrorPage />
				</MainLayout>
			</Bootstrap>
		),
		children: appRoutes
	}
])
