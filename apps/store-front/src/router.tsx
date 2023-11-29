import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import { MainLayout } from "@prwt/layouts"

import { Bootstrap } from "./Bootstrap"
import { Nav } from "./Nav"
import { ClickUntilPage } from "./pages/ClickUntilPage"
import { ErrorPage } from "./pages/ErrorPage"
import { LoaderPage } from "./pages/LoaderPage"
import { LongPage } from "./pages/LongPage"

const FieldsPage = lazy(async () => ({
	default: (await import("./pages/FieldsPage")).FieldsPage
}))
const SlowFieldsPage = lazy(async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return {
		default: (await import("./pages/FieldsPage")).FieldsPage
	}
})

export const router = createBrowserRouter([
	{
		element: (
			<Bootstrap>
				<MainLayout footer={<p>Footer</p>} nav={<Nav />} />
			</Bootstrap>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <h1>Hello world</h1>
			},
			{
				path: "fields",
				element: <SlowFieldsPage />
			},
			{
				path: "loader",
				element: <LoaderPage />
			},
			{
				path: "long",
				element: <LongPage />
			},
			{
				path: "clickUntil",
				element: <ClickUntilPage />
			}
		]
	}
])
